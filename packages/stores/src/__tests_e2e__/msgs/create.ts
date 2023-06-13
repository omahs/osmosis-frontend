import { ProtoMsgsOrWithAminoMsgs } from "@keplr-wallet/stores";
import Long from "long";

import { cosmos, osmosis } from ".";

export function makeSendLinkBalancerPoolToCLPoolProposalMsgs(
  sender: string,
  balancerPoolId: string,
  clPoolId: string
): ProtoMsgsOrWithAminoMsgs {
  const aminoMsg = {
    type: "cosmos-sdk/MsgSubmitProposal",
    value: {
      initial_deposit: [
        {
          denom: "uosmo",
          amount: "100000000",
        },
      ],
      proposer: sender,
      content: {
        type: "osmosis/UpdateMigrationRecordsProposal",
        value: {
          title: `TITLE Migration Record: ${balancerPoolId} -> ${clPoolId}`,
          description: `DESCRIPTION: Migration Record: ${balancerPoolId} -> ${clPoolId}`,
          records: [
            {
              balancer_pool_id: balancerPoolId,
              cl_pool_id: clPoolId,
            },
          ],
        },
      },
    },
  };

  return {
    aminoMsgs: [aminoMsg],
    protoMsgs: [
      {
        typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
        value: cosmos.gov.v1beta1.MsgSubmitProposal.encode({
          initialDeposit: aminoMsg.value.initial_deposit,
          proposer: aminoMsg.value.proposer,
          // should only be one
          content: {
            type_url: "/osmosis.gamm.v1beta1.UpdateMigrationRecordsProposal",
            value: osmosis.gamm.v1beta1.UpdateMigrationRecordsProposal.encode({
              title: aminoMsg.value.content.value.title,
              description: aminoMsg.value.content.value.description,
              records: aminoMsg.value.content.value.records.map((record) => ({
                balancerPoolId: Long.fromString(record.balancer_pool_id),
                clPoolId: Long.fromString(record.cl_pool_id),
              })),
            }).finish(),
          },
        }).finish(),
      },
    ],
  };
}
