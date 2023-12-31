/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";

export interface CrowdfundingprojectInterface extends utils.Interface {
  functions: {
    "goalAmount()": FunctionFragment;
    "makeDonation()": FunctionFragment;
    "projDescription()": FunctionFragment;
    "projTitle()": FunctionFragment;
    "raisedAmount()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "goalAmount"
      | "makeDonation"
      | "projDescription"
      | "projTitle"
      | "raisedAmount"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "goalAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "makeDonation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "projDescription",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "projTitle", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "raisedAmount",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "goalAmount", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "makeDonation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "projDescription",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "projTitle", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "raisedAmount",
    data: BytesLike
  ): Result;

  events: {
    "Funded(address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Funded"): EventFragment;
}

export interface FundedEventObject {
  donar: string;
  amount: BigNumber;
  timestamp: BigNumber;
}
export type FundedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  FundedEventObject
>;

export type FundedEventFilter = TypedEventFilter<FundedEvent>;

export interface Crowdfundingproject extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CrowdfundingprojectInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    goalAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    makeDonation(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    projDescription(overrides?: CallOverrides): Promise<[string]>;

    projTitle(overrides?: CallOverrides): Promise<[string]>;

    raisedAmount(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  goalAmount(overrides?: CallOverrides): Promise<BigNumber>;

  makeDonation(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  projDescription(overrides?: CallOverrides): Promise<string>;

  projTitle(overrides?: CallOverrides): Promise<string>;

  raisedAmount(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    goalAmount(overrides?: CallOverrides): Promise<BigNumber>;

    makeDonation(overrides?: CallOverrides): Promise<void>;

    projDescription(overrides?: CallOverrides): Promise<string>;

    projTitle(overrides?: CallOverrides): Promise<string>;

    raisedAmount(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "Funded(address,uint256,uint256)"(
      donar?: PromiseOrValue<string> | null,
      amount?: PromiseOrValue<BigNumberish> | null,
      timestamp?: PromiseOrValue<BigNumberish> | null
    ): FundedEventFilter;
    Funded(
      donar?: PromiseOrValue<string> | null,
      amount?: PromiseOrValue<BigNumberish> | null,
      timestamp?: PromiseOrValue<BigNumberish> | null
    ): FundedEventFilter;
  };

  estimateGas: {
    goalAmount(overrides?: CallOverrides): Promise<BigNumber>;

    makeDonation(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    projDescription(overrides?: CallOverrides): Promise<BigNumber>;

    projTitle(overrides?: CallOverrides): Promise<BigNumber>;

    raisedAmount(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    goalAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    makeDonation(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    projDescription(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    projTitle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    raisedAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
