import { observer } from "mobx-react-lite";
import Head from "next/head";
import React, {
  FunctionComponent,
  ReactElement,
  useEffect,
  useState,
} from "react";
import { useTranslation } from "react-multi-lang";

import { PoolAssetsIcon, PoolAssetsName } from "~/components/assets";
import { Button } from "~/components/buttons";
import { MyPositionsSection } from "~/components/complex/my-positions-section";
import { AddLiquidityModal } from "~/modals";
import { useStore } from "~/stores";
import { ObservableMergedPositionByAddress } from "~/stores/derived-data";

import { PriceAndLiquidityDepthChart } from "../chart/price-and-liquidity-depth";

export const ConcentratedLiquidityPool: FunctionComponent<{ poolId: string }> =
  observer(({ poolId }) => {
    const { chainStore, accountStore, queriesStore, derivedDataStore } =
      useStore();
    const { chainId } = chainStore.osmosis;
    const account = accountStore.getAccount(chainId);
    const osmosisQueries = queriesStore.get(chainId).osmosis!;
    const t = useTranslation();
    const [activeModal, setActiveModal] = useState<"add-liquidity" | null>(
      null
    );

    const pool = osmosisQueries.queryGammPools.getPool(poolId);

    const [queryAddress, setQueryAddress] =
      useState<ObservableMergedPositionByAddress | null>(null);

    useEffect(() => {
      (async () => {
        if (!account.bech32Address) return;

        setQueryAddress(
          derivedDataStore.mergedPositionsByAddress.get(account.bech32Address)
        );
      })();
    }, [account.bech32Address]);

    if (!queryAddress) return null;

    const len = Object.keys(queryAddress.mergedRanges).length;

    if (!len) return null;

    return (
      <main className="m-auto flex min-h-screen max-w-[1221px] flex-col gap-8 bg-osmoverse-900 p-8 md:gap-4 md:p-4">
        <Head>
          <title>
            {t("pool.title", { id: poolId ? poolId.toString() : "-" })}
          </title>
        </Head>
        {pool && activeModal === "add-liquidity" && (
          <AddLiquidityModal
            isOpen={true}
            poolId={pool.id}
            onRequestClose={() => setActiveModal(null)}
          />
        )}
        <section className="flex flex-col gap-8">
          <div className="flex flex-col rounded-[28px] bg-osmoverse-1000 p-8">
            <div className="flex flex-row">
              <div className="flex flex-col gap-3">
                <div className="flex flex-row items-center gap-2">
                  <PoolAssetsIcon
                    className="!w-[78px]"
                    assets={pool?.poolAssets.map((poolAsset) => ({
                      coinImageUrl: poolAsset.amount.currency.coinImageUrl,
                      coinDenom: poolAsset.amount.currency.coinDenom,
                    }))}
                  />
                  <PoolAssetsName
                    size="md"
                    className="text-h5 font-h5"
                    assetDenoms={pool?.poolAssets.map(
                      (asset) => asset.amount.currency.coinDenom
                    )}
                  />
                </div>
                <div>
                  <span className="text-supercharged-gradient text-body2 font-body2 ">
                    {t("clPositions.supercharged")}
                  </span>
                </div>
              </div>
              <div className="flex flex-grow flex-row justify-end gap-10">
                <PoolDataGroup label={t("pool.liquidity")} value="$0.00" />
                <PoolDataGroup
                  label={t("pool.24hrTradingVolume")}
                  value="$0.00"
                />
                <PoolDataGroup
                  label={t("pool.swapFee")}
                  value={pool?.swapFee ? pool.swapFee.toString() : "0%"}
                />
              </div>
            </div>
            <PriceAndLiquidityDepthChart poolId={poolId} />
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-row">
              <div className="flex flex-grow flex-col gap-3">
                <h6>{t("clPositions.yourPositions")}</h6>
                <div className="flex flex-row items-center text-body2 font-body2">
                  <span className="text-wosmongton-200">
                    {t("clPositions.yourPositionsDesc")}
                  </span>
                  <span className="flex flex-row">
                    <a
                      className="mx-1 inline-flex flex-row items-center text-wosmongton-300 underline"
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("clPositions.learnMoreAboutPools")}
                    </a>
                    <img src="/icons/arrow-right.svg" alt="learn more" />
                  </span>
                </div>
              </div>
              <Button
                className="subtitle1 w-fit"
                size="sm"
                onClick={() => {
                  setActiveModal("add-liquidity");
                }}
              >
                {t("clPositions.createAPosition")}
              </Button>
            </div>
            <MyPositionsSection forPoolId={poolId} />
          </div>
        </section>
      </main>
    );
  });

function PoolDataGroup(props: { label: string; value: string }): ReactElement {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-body2 font-body2 text-osmoverse-400">
        {props.label}
      </div>
      <h4 className="text-osmoverse-100">{props.value}</h4>
    </div>
  );
}
