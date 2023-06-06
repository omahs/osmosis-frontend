import classNames from "classnames";
import { observer } from "mobx-react-lite";
import dynamic from "next/dynamic";
import { ComponentProps, FunctionComponent } from "react";

import { PriceChartHeader } from "~/components/chart/token-pair-historical";
import { useHistoricalAndLiquidityData } from "~/hooks/ui-config/use-historical-and-depth-data";
import { useStore } from "~/stores";

import { ChartButton } from "../buttons";
import { CustomClasses } from "../types";

const ConcentratedLiquidityDepthChart = dynamic(
  () => import("~/components/chart/concentrated-liquidity-depth"),
  { ssr: false }
);
const TokenPairHistoricalChart = dynamic(
  () => import("~/components/chart/token-pair-historical"),
  { ssr: false }
);

export const PriceAndLiquidityDepthChart: FunctionComponent<
  {
    poolId: string;
  } & CustomClasses &
    Partial<ComponentProps<typeof ConcentratedLiquidityDepthChart>>
> = observer((props) => {
  const { poolId, className } = props;
  const { chainStore } = useStore();
  const { chainId } = chainStore.osmosis;
  const config = useHistoricalAndLiquidityData(chainId, poolId);

  const {
    historicalChartData,
    historicalRange,
    xRange,
    yRange,
    setHoverPrice,
    lastChartData,
    depthChartData,
    setZoom,
    zoomIn,
    zoomOut,
    priceDecimal,
    setHistoricalRange,
    baseDenom,
    quoteDenom,
    hoverPrice,
  } = config;

  return (
    <div className={classNames("flex h-96", className)}>
      <div className="flex-shrink-1 flex w-0 flex-1 flex-col gap-[20px] py-7">
        <PriceChartHeader
          historicalRange={historicalRange}
          setHistoricalRange={setHistoricalRange}
          baseDenom={baseDenom}
          quoteDenom={quoteDenom}
          hoverPrice={hoverPrice}
          decimal={priceDecimal}
        />
        <TokenPairHistoricalChart
          data={historicalChartData}
          annotations={[]}
          domain={yRange}
          onPointerHover={setHoverPrice}
          onPointerOut={
            lastChartData ? () => setHoverPrice(lastChartData.close) : undefined
          }
        />
      </div>
      <div className="flex-shrink-1 flex w-[229px] flex-col">
        <div className="flex flex-col pr-8">
          <div className="mt-7 flex h-6 flex-row justify-end gap-1">
            <ChartButton
              alt="refresh"
              src="/icons/refresh-ccw.svg"
              selected={false}
              onClick={() => setZoom(1)}
            />
            <ChartButton
              alt="zoom in"
              src="/icons/zoom-in.svg"
              selected={false}
              onClick={zoomIn}
            />
            <ChartButton
              alt="zoom out"
              src="/icons/zoom-out.svg"
              selected={false}
              onClick={zoomOut}
            />
          </div>
        </div>
        <div className="mt-[32px] flex flex-1 flex-col">
          <ConcentratedLiquidityDepthChart
            yRange={yRange}
            xRange={xRange}
            data={depthChartData}
            annotationDatum={{
              price: lastChartData?.close || 0,
              depth: xRange[1],
            }}
            offset={{ top: 0, right: 36, bottom: 24 + 28, left: 0 }}
            horizontal
            {...props}
          />
        </div>
      </div>
    </div>
  );
});
