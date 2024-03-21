// Generated by Ignite ignite.com/cli

import { SigningStargateClient, DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { MsgActionCreated } from "./types/warden/intent/action";
import { QueryParamsRequest } from "./types/warden/intent/query";
import { QueryIntentByIdRequest } from "./types/warden/intent/query";
import { MsgNewIntent } from "./types/warden/intent/tx";
import { MsgApproveAction } from "./types/warden/intent/tx";
import { Action } from "./types/warden/intent/action";
import { QueryActionsByAddressResponse } from "./types/warden/intent/query";
import { GenesisState } from "./types/warden/intent/genesis";
import { MsgApproveActionResponse } from "./types/warden/intent/tx";
import { MsgNewIntentResponse } from "./types/warden/intent/tx";
import { MsgRevokeAction } from "./types/warden/intent/tx";
import { MsgRevokeActionResponse } from "./types/warden/intent/tx";
import { Approver } from "./types/warden/intent/action";
import { QueryIntentByIdResponse } from "./types/warden/intent/query";
import { QueryActionByIdResponse } from "./types/warden/intent/query";
import { QueryParamsResponse } from "./types/warden/intent/query";
import { QueryActionsRequest } from "./types/warden/intent/query";
import { QueryActionByIdRequest } from "./types/warden/intent/query";
import { Intent } from "./types/warden/intent/intent";
import { MsgUpdateParams } from "./types/warden/intent/tx";
import { QueryActionsResponse } from "./types/warden/intent/query";
import { MsgUpdateParamsResponse } from "./types/warden/intent/tx";
import { QueryIntentsRequest } from "./types/warden/intent/query";
import { QueryIntentsResponse } from "./types/warden/intent/query";
import { QueryActionsByAddressRequest } from "./types/warden/intent/query";
import { Params } from "./types/warden/intent/params";


export { MsgActionCreated, QueryParamsRequest, QueryIntentByIdRequest, MsgNewIntent, MsgApproveAction, Action, QueryActionsByAddressResponse, GenesisState, MsgApproveActionResponse, MsgNewIntentResponse, MsgRevokeAction, MsgRevokeActionResponse, Approver, QueryIntentByIdResponse, QueryActionByIdResponse, QueryParamsResponse, QueryActionsRequest, QueryActionByIdRequest, Intent, MsgUpdateParams, QueryActionsResponse, MsgUpdateParamsResponse, QueryIntentsRequest, QueryIntentsResponse, QueryActionsByAddressRequest, Params };

type sendMsgActionCreatedParams = {
  value: MsgActionCreated,
  fee?: StdFee,
  memo?: string
};

type sendQueryParamsRequestParams = {
  value: QueryParamsRequest,
  fee?: StdFee,
  memo?: string
};

type sendQueryIntentByIdRequestParams = {
  value: QueryIntentByIdRequest,
  fee?: StdFee,
  memo?: string
};

type sendMsgNewIntentParams = {
  value: MsgNewIntent,
  fee?: StdFee,
  memo?: string
};

type sendMsgApproveActionParams = {
  value: MsgApproveAction,
  fee?: StdFee,
  memo?: string
};

type sendActionParams = {
  value: Action,
  fee?: StdFee,
  memo?: string
};

type sendQueryActionsByAddressResponseParams = {
  value: QueryActionsByAddressResponse,
  fee?: StdFee,
  memo?: string
};

type sendGenesisStateParams = {
  value: GenesisState,
  fee?: StdFee,
  memo?: string
};

type sendMsgApproveActionResponseParams = {
  value: MsgApproveActionResponse,
  fee?: StdFee,
  memo?: string
};

type sendMsgNewIntentResponseParams = {
  value: MsgNewIntentResponse,
  fee?: StdFee,
  memo?: string
};

type sendMsgRevokeActionParams = {
  value: MsgRevokeAction,
  fee?: StdFee,
  memo?: string
};

type sendMsgRevokeActionResponseParams = {
  value: MsgRevokeActionResponse,
  fee?: StdFee,
  memo?: string
};

type sendApproverParams = {
  value: Approver,
  fee?: StdFee,
  memo?: string
};

type sendQueryIntentByIdResponseParams = {
  value: QueryIntentByIdResponse,
  fee?: StdFee,
  memo?: string
};

type sendQueryActionByIdResponseParams = {
  value: QueryActionByIdResponse,
  fee?: StdFee,
  memo?: string
};

type sendQueryParamsResponseParams = {
  value: QueryParamsResponse,
  fee?: StdFee,
  memo?: string
};

type sendQueryActionsRequestParams = {
  value: QueryActionsRequest,
  fee?: StdFee,
  memo?: string
};

type sendQueryActionByIdRequestParams = {
  value: QueryActionByIdRequest,
  fee?: StdFee,
  memo?: string
};

type sendIntentParams = {
  value: Intent,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdateParamsParams = {
  value: MsgUpdateParams,
  fee?: StdFee,
  memo?: string
};

type sendQueryActionsResponseParams = {
  value: QueryActionsResponse,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdateParamsResponseParams = {
  value: MsgUpdateParamsResponse,
  fee?: StdFee,
  memo?: string
};

type sendQueryIntentsRequestParams = {
  value: QueryIntentsRequest,
  fee?: StdFee,
  memo?: string
};

type sendQueryIntentsResponseParams = {
  value: QueryIntentsResponse,
  fee?: StdFee,
  memo?: string
};

type sendQueryActionsByAddressRequestParams = {
  value: QueryActionsByAddressRequest,
  fee?: StdFee,
  memo?: string
};

type sendParamsParams = {
  value: Params,
  fee?: StdFee,
  memo?: string
};


type msgActionCreatedParams = {
  value: MsgActionCreated,
};

type queryParamsRequestParams = {
  value: QueryParamsRequest,
};

type queryIntentByIdRequestParams = {
  value: QueryIntentByIdRequest,
};

type msgNewIntentParams = {
  value: MsgNewIntent,
};

type msgApproveActionParams = {
  value: MsgApproveAction,
};

type actionParams = {
  value: Action,
};

type queryActionsByAddressResponseParams = {
  value: QueryActionsByAddressResponse,
};

type genesisStateParams = {
  value: GenesisState,
};

type msgApproveActionResponseParams = {
  value: MsgApproveActionResponse,
};

type msgNewIntentResponseParams = {
  value: MsgNewIntentResponse,
};

type msgRevokeActionParams = {
  value: MsgRevokeAction,
};

type msgRevokeActionResponseParams = {
  value: MsgRevokeActionResponse,
};

type approverParams = {
  value: Approver,
};

type queryIntentByIdResponseParams = {
  value: QueryIntentByIdResponse,
};

type queryActionByIdResponseParams = {
  value: QueryActionByIdResponse,
};

type queryParamsResponseParams = {
  value: QueryParamsResponse,
};

type queryActionsRequestParams = {
  value: QueryActionsRequest,
};

type queryActionByIdRequestParams = {
  value: QueryActionByIdRequest,
};

type intentParams = {
  value: Intent,
};

type msgUpdateParamsParams = {
  value: MsgUpdateParams,
};

type queryActionsResponseParams = {
  value: QueryActionsResponse,
};

type msgUpdateParamsResponseParams = {
  value: MsgUpdateParamsResponse,
};

type queryIntentsRequestParams = {
  value: QueryIntentsRequest,
};

type queryIntentsResponseParams = {
  value: QueryIntentsResponse,
};

type queryActionsByAddressRequestParams = {
  value: QueryActionsByAddressRequest,
};

type paramsParams = {
  value: Params,
};


export const registry = new Registry(msgTypes);

type Field = {
	name: string;
	type: unknown;
}
function getStructure(template) {
	const structure: {fields: Field[]} = { fields: [] }
	for (let [key, value] of Object.entries(template)) {
		let field = { name: key, type: typeof value }
		structure.fields.push(field)
	}
	return structure
}
const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
	prefix: string
	signer?: OfflineSigner
}

export const txClient = ({ signer, prefix, addr }: TxClientOptions = { addr: "http://localhost:26657", prefix: "cosmos" }) => {

  return {
		
		async sendMsgActionCreated({ value, fee, memo }: sendMsgActionCreatedParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgActionCreated: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.msgActionCreated({ value: MsgActionCreated.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgActionCreated: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryParamsRequest: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryParamsRequest({ value: QueryParamsRequest.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryParamsRequest: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryIntentByIdRequest({ value, fee, memo }: sendQueryIntentByIdRequestParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryIntentByIdRequest: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryIntentByIdRequest({ value: QueryIntentByIdRequest.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryIntentByIdRequest: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgNewIntent({ value, fee, memo }: sendMsgNewIntentParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgNewIntent: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.msgNewIntent({ value: MsgNewIntent.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgNewIntent: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgApproveAction({ value, fee, memo }: sendMsgApproveActionParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgApproveAction: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.msgApproveAction({ value: MsgApproveAction.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgApproveAction: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendAction({ value, fee, memo }: sendActionParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendAction: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.action({ value: Action.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendAction: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryActionsByAddressResponse({ value, fee, memo }: sendQueryActionsByAddressResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryActionsByAddressResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryActionsByAddressResponse({ value: QueryActionsByAddressResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryActionsByAddressResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendGenesisState: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.genesisState({ value: GenesisState.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendGenesisState: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgApproveActionResponse({ value, fee, memo }: sendMsgApproveActionResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgApproveActionResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.msgApproveActionResponse({ value: MsgApproveActionResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgApproveActionResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgNewIntentResponse({ value, fee, memo }: sendMsgNewIntentResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgNewIntentResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.msgNewIntentResponse({ value: MsgNewIntentResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgNewIntentResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgRevokeAction({ value, fee, memo }: sendMsgRevokeActionParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgRevokeAction: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.msgRevokeAction({ value: MsgRevokeAction.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgRevokeAction: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgRevokeActionResponse({ value, fee, memo }: sendMsgRevokeActionResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgRevokeActionResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.msgRevokeActionResponse({ value: MsgRevokeActionResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgRevokeActionResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendApprover({ value, fee, memo }: sendApproverParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendApprover: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.approver({ value: Approver.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendApprover: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryIntentByIdResponse({ value, fee, memo }: sendQueryIntentByIdResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryIntentByIdResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryIntentByIdResponse({ value: QueryIntentByIdResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryIntentByIdResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryActionByIdResponse({ value, fee, memo }: sendQueryActionByIdResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryActionByIdResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryActionByIdResponse({ value: QueryActionByIdResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryActionByIdResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryParamsResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryParamsResponse({ value: QueryParamsResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryParamsResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryActionsRequest({ value, fee, memo }: sendQueryActionsRequestParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryActionsRequest: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryActionsRequest({ value: QueryActionsRequest.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryActionsRequest: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryActionByIdRequest({ value, fee, memo }: sendQueryActionByIdRequestParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryActionByIdRequest: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryActionByIdRequest({ value: QueryActionByIdRequest.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryActionByIdRequest: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendIntent({ value, fee, memo }: sendIntentParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendIntent: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.intent({ value: Intent.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendIntent: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdateParams: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.msgUpdateParams({ value: MsgUpdateParams.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdateParams: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryActionsResponse({ value, fee, memo }: sendQueryActionsResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryActionsResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryActionsResponse({ value: QueryActionsResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryActionsResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdateParamsResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.msgUpdateParamsResponse({ value: MsgUpdateParamsResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdateParamsResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryIntentsRequest({ value, fee, memo }: sendQueryIntentsRequestParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryIntentsRequest: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryIntentsRequest({ value: QueryIntentsRequest.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryIntentsRequest: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryIntentsResponse({ value, fee, memo }: sendQueryIntentsResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryIntentsResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryIntentsResponse({ value: QueryIntentsResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryIntentsResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryActionsByAddressRequest({ value, fee, memo }: sendQueryActionsByAddressRequestParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryActionsByAddressRequest: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryActionsByAddressRequest({ value: QueryActionsByAddressRequest.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryActionsByAddressRequest: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendParams: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.params({ value: Params.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendParams: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		msgActionCreated({ value }: msgActionCreatedParams): EncodeObject {
			try {
				return { typeUrl: "/warden.intent.MsgActionCreated", value: MsgActionCreated.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgActionCreated: Could not create message: ' + e.message)
			}
		},
		
		queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject {
			try {
				return { typeUrl: "/warden.intent.QueryParamsRequest", value: QueryParamsRequest.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryParamsRequest: Could not create message: ' + e.message)
			}
		},
		
		queryIntentByIdRequest({ value }: queryIntentByIdRequestParams): EncodeObject {
			try {
				return { typeUrl: "/warden.intent.QueryIntentByIdRequest", value: QueryIntentByIdRequest.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryIntentByIdRequest: Could not create message: ' + e.message)
			}
		},
		
		msgNewIntent({ value }: msgNewIntentParams): EncodeObject {
			try {
				return { typeUrl: "/warden.intent.MsgNewIntent", value: MsgNewIntent.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgNewIntent: Could not create message: ' + e.message)
			}
		},
		
		msgApproveAction({ value }: msgApproveActionParams): EncodeObject {
			try {
				return { typeUrl: "/warden.intent.MsgApproveAction", value: MsgApproveAction.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgApproveAction: Could not create message: ' + e.message)
			}
		},
		
		action({ value }: actionParams): EncodeObject {
			try {
				return { typeUrl: "/warden.intent.Action", value: Action.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:Action: Could not create message: ' + e.message)
			}
		},
		
		queryActionsByAddressResponse({ value }: queryActionsByAddressResponseParams): EncodeObject {
			try {
				return { typeUrl: "/warden.intent.QueryActionsByAddressResponse", value: QueryActionsByAddressResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryActionsByAddressResponse: Could not create message: ' + e.message)
			}
		},
		
		genesisState({ value }: genesisStateParams): EncodeObject {
			try {
				return { typeUrl: "/warden.intent.GenesisState", value: GenesisState.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:GenesisState: Could not create message: ' + e.message)
			}
		},
		
		msgApproveActionResponse({ value }: msgApproveActionResponseParams): EncodeObject {
			try {
				return { typeUrl: "/warden.intent.MsgApproveActionResponse", value: MsgApproveActionResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgApproveActionResponse: Could not create message: ' + e.message)
			}
		},
		
		msgNewIntentResponse({ value }: msgNewIntentResponseParams): EncodeObject {
			try {
				return { typeUrl: "/warden.intent.MsgNewIntentResponse", value: MsgNewIntentResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgNewIntentResponse: Could not create message: ' + e.message)
			}
		},
		
		msgRevokeAction({ value }: msgRevokeActionParams): EncodeObject {
			try {
				return { typeUrl: "/warden.intent.MsgRevokeAction", value: MsgRevokeAction.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgRevokeAction: Could not create message: ' + e.message)
			}
		},
		
		msgRevokeActionResponse({ value }: msgRevokeActionResponseParams): EncodeObject {
			try {
				return { typeUrl: "/warden.intent.MsgRevokeActionResponse", value: MsgRevokeActionResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgRevokeActionResponse: Could not create message: ' + e.message)
			}
		},
		
		approver({ value }: approverParams): EncodeObject {
			try {
				return { typeUrl: "/warden.intent.Approver", value: Approver.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:Approver: Could not create message: ' + e.message)
			}
		},
		
		queryIntentByIdResponse({ value }: queryIntentByIdResponseParams): EncodeObject {
			try {
				return { typeUrl: "/warden.intent.QueryIntentByIdResponse", value: QueryIntentByIdResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryIntentByIdResponse: Could not create message: ' + e.message)
			}
		},
		
		queryActionByIdResponse({ value }: queryActionByIdResponseParams): EncodeObject {
			try {
				return { typeUrl: "/warden.intent.QueryActionByIdResponse", value: QueryActionByIdResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryActionByIdResponse: Could not create message: ' + e.message)
			}
		},
		
		queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject {
			try {
				return { typeUrl: "/warden.intent.QueryParamsResponse", value: QueryParamsResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryParamsResponse: Could not create message: ' + e.message)
			}
		},
		
		queryActionsRequest({ value }: queryActionsRequestParams): EncodeObject {
			try {
				return { typeUrl: "/warden.intent.QueryActionsRequest", value: QueryActionsRequest.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryActionsRequest: Could not create message: ' + e.message)
			}
		},
		
		queryActionByIdRequest({ value }: queryActionByIdRequestParams): EncodeObject {
			try {
				return { typeUrl: "/warden.intent.QueryActionByIdRequest", value: QueryActionByIdRequest.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryActionByIdRequest: Could not create message: ' + e.message)
			}
		},
		
		intent({ value }: intentParams): EncodeObject {
			try {
				return { typeUrl: "/warden.intent.Intent", value: Intent.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:Intent: Could not create message: ' + e.message)
			}
		},
		
		msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject {
			try {
				return { typeUrl: "/warden.intent.MsgUpdateParams", value: MsgUpdateParams.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateParams: Could not create message: ' + e.message)
			}
		},
		
		queryActionsResponse({ value }: queryActionsResponseParams): EncodeObject {
			try {
				return { typeUrl: "/warden.intent.QueryActionsResponse", value: QueryActionsResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryActionsResponse: Could not create message: ' + e.message)
			}
		},
		
		msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject {
			try {
				return { typeUrl: "/warden.intent.MsgUpdateParamsResponse", value: MsgUpdateParamsResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateParamsResponse: Could not create message: ' + e.message)
			}
		},
		
		queryIntentsRequest({ value }: queryIntentsRequestParams): EncodeObject {
			try {
				return { typeUrl: "/warden.intent.QueryIntentsRequest", value: QueryIntentsRequest.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryIntentsRequest: Could not create message: ' + e.message)
			}
		},
		
		queryIntentsResponse({ value }: queryIntentsResponseParams): EncodeObject {
			try {
				return { typeUrl: "/warden.intent.QueryIntentsResponse", value: QueryIntentsResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryIntentsResponse: Could not create message: ' + e.message)
			}
		},
		
		queryActionsByAddressRequest({ value }: queryActionsByAddressRequestParams): EncodeObject {
			try {
				return { typeUrl: "/warden.intent.QueryActionsByAddressRequest", value: QueryActionsByAddressRequest.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryActionsByAddressRequest: Could not create message: ' + e.message)
			}
		},
		
		params({ value }: paramsParams): EncodeObject {
			try {
				return { typeUrl: "/warden.intent.Params", value: Params.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:Params: Could not create message: ' + e.message)
			}
		},
		
	}
};

interface QueryClientOptions {
  addr: string
}

export const queryClient = ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseURL: addr });
};

class SDKModule {
	public query: ReturnType<typeof queryClient>;
	public tx: ReturnType<typeof txClient>;
	public structure: Record<string,unknown>;
	public registry: Array<[string, GeneratedType]> = [];

	constructor(client: IgniteClient) {		
	
		this.query = queryClient({ addr: client.env.apiURL });		
		this.updateTX(client);
		this.structure =  {
						
		};
		client.on('signer-changed',(signer) => {			
		 this.updateTX(client);
		})
	}
	updateTX(client: IgniteClient) {
    const methods = txClient({
        signer: client.signer,
        addr: client.env.rpcURL,
        prefix: client.env.prefix ?? "cosmos",
    })
	
    this.tx = methods;
    for (let m in methods) {
        this.tx[m] = methods[m].bind(this.tx);
    }
	}
};

const IgntModule = (test: IgniteClient) => {
	return {
		module: {
			WardenIntent: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default IgntModule;