/* eslint-disable */
import {
  chainId,
  getLatestQueryPool,
  RootStore,
  waitAccountLoaded,
} from "../../__tests_e2e__/test-env";
import { ObservableQueryPool } from "../../queries";
import { makeSendLinkBalancerPoolToCLPoolProposalMsgs } from "../../__tests_e2e__/msgs/create";

// increase timeout since we need to wait 3mins for gov proposal to pass
jest.setTimeout(240_000);

describe("Migrate Shares Tx", () => {
  let { accountStore, queriesStore } = new RootStore();
  let gammPool: ObservableQueryPool | undefined; // relies on `jest --runInBand` to work properly
  let clPool: ObservableQueryPool | undefined;

  beforeEach(async () => {
    // Init new localnet per test
    const account = accountStore.getAccount(chainId);
    account.cosmos.broadcastMode = "sync";
    await waitAccountLoaded(account);

    // And prepare the balancer pool
    await account.osmosis.sendCreateBalancerPoolMsg(
      "0",
      [
        {
          weight: "200",
          token: {
            currency: {
              coinDenom: "OSMO",
              coinMinimalDenom: "uosmo",
              coinDecimals: 6,
            },
            amount: "100",
          },
        },
        {
          weight: "300",
          token: {
            currency: {
              coinDenom: "ION",
              coinMinimalDenom: "uion",
              coinDecimals: 6,
            },
            amount: "100",
          },
        },
      ],
      ""
    );

    gammPool = await getLatestQueryPool(chainId, queriesStore);

    // prepare CL pool
    await account.osmosis.sendCreateConcentratedPoolMsg(
      "uion",
      "uosmo",
      1,
      0.001, // must have spread factor to generate fees
      undefined
    );

    clPool = await getLatestQueryPool(chainId, queriesStore);

    const tx = await new Promise((resolve, reject) =>
      account.cosmos
        .sendMsgs(
          "createBlancerToClPoolLink",
          makeSendLinkBalancerPoolToCLPoolProposalMsgs(
            account.bech32Address,
            gammPool!.id,
            clPool!.id
          ),
          undefined,
          {
            amount: [],
            gas: "25000000",
          },
          undefined,
          (tx) => {
            if (tx.code) reject(tx.log);
            else resolve(tx);
          }
        )
        .catch(reject)
    );

    console.log(tx);
  });

  test("beforeall", async () => {
    expect(gammPool).toBeDefined();
    expect(clPool).toBeDefined();
  });
});
