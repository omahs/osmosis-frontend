/* eslint-disable */
import * as $protobuf from "protobufjs";
/** Namespace cosmos. */
export namespace cosmos {
  /** Namespace base. */
  namespace base {
    /** Namespace v1beta1. */
    namespace v1beta1 {
      /** Properties of a Coin. */
      interface ICoin {
        /** Coin denom */
        denom?: string | null;

        /** Coin amount */
        amount?: string | null;
      }

      /** Represents a Coin. */
      class Coin implements ICoin {
        /**
         * Constructs a new Coin.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.base.v1beta1.ICoin);

        /** Coin denom. */
        public denom: string;

        /** Coin amount. */
        public amount: string;

        /**
         * Creates a new Coin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Coin instance
         */
        public static create(
          properties?: cosmos.base.v1beta1.ICoin
        ): cosmos.base.v1beta1.Coin;

        /**
         * Encodes the specified Coin message. Does not implicitly {@link cosmos.base.v1beta1.Coin.verify|verify} messages.
         * @param m Coin message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.base.v1beta1.ICoin,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a Coin message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Coin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.base.v1beta1.Coin;

        /**
         * Creates a Coin message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns Coin
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.base.v1beta1.Coin;

        /**
         * Creates a plain object from a Coin message. Also converts values to other types if specified.
         * @param m Coin
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.base.v1beta1.Coin,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this Coin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a DecCoin. */
      interface IDecCoin {
        /** DecCoin denom */
        denom?: string | null;

        /** DecCoin amount */
        amount?: string | null;
      }

      /** Represents a DecCoin. */
      class DecCoin implements IDecCoin {
        /**
         * Constructs a new DecCoin.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.base.v1beta1.IDecCoin);

        /** DecCoin denom. */
        public denom: string;

        /** DecCoin amount. */
        public amount: string;

        /**
         * Creates a new DecCoin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DecCoin instance
         */
        public static create(
          properties?: cosmos.base.v1beta1.IDecCoin
        ): cosmos.base.v1beta1.DecCoin;

        /**
         * Encodes the specified DecCoin message. Does not implicitly {@link cosmos.base.v1beta1.DecCoin.verify|verify} messages.
         * @param m DecCoin message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.base.v1beta1.IDecCoin,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a DecCoin message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DecCoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.base.v1beta1.DecCoin;

        /**
         * Creates a DecCoin message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns DecCoin
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.base.v1beta1.DecCoin;

        /**
         * Creates a plain object from a DecCoin message. Also converts values to other types if specified.
         * @param m DecCoin
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.base.v1beta1.DecCoin,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this DecCoin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of an IntProto. */
      interface IIntProto {
        /** IntProto int */
        int?: string | null;
      }

      /** Represents an IntProto. */
      class IntProto implements IIntProto {
        /**
         * Constructs a new IntProto.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.base.v1beta1.IIntProto);

        /** IntProto int. */
        public int: string;

        /**
         * Creates a new IntProto instance using the specified properties.
         * @param [properties] Properties to set
         * @returns IntProto instance
         */
        public static create(
          properties?: cosmos.base.v1beta1.IIntProto
        ): cosmos.base.v1beta1.IntProto;

        /**
         * Encodes the specified IntProto message. Does not implicitly {@link cosmos.base.v1beta1.IntProto.verify|verify} messages.
         * @param m IntProto message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.base.v1beta1.IIntProto,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes an IntProto message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns IntProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.base.v1beta1.IntProto;

        /**
         * Creates an IntProto message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns IntProto
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.base.v1beta1.IntProto;

        /**
         * Creates a plain object from an IntProto message. Also converts values to other types if specified.
         * @param m IntProto
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.base.v1beta1.IntProto,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this IntProto to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a DecProto. */
      interface IDecProto {
        /** DecProto dec */
        dec?: string | null;
      }

      /** Represents a DecProto. */
      class DecProto implements IDecProto {
        /**
         * Constructs a new DecProto.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.base.v1beta1.IDecProto);

        /** DecProto dec. */
        public dec: string;

        /**
         * Creates a new DecProto instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DecProto instance
         */
        public static create(
          properties?: cosmos.base.v1beta1.IDecProto
        ): cosmos.base.v1beta1.DecProto;

        /**
         * Encodes the specified DecProto message. Does not implicitly {@link cosmos.base.v1beta1.DecProto.verify|verify} messages.
         * @param m DecProto message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.base.v1beta1.IDecProto,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a DecProto message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DecProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.base.v1beta1.DecProto;

        /**
         * Creates a DecProto message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns DecProto
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.base.v1beta1.DecProto;

        /**
         * Creates a plain object from a DecProto message. Also converts values to other types if specified.
         * @param m DecProto
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.base.v1beta1.DecProto,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this DecProto to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }
    }
  }

  /** Namespace bank. */
  namespace bank {
    /** Namespace v1beta1. */
    namespace v1beta1 {
      /** Properties of a Params. */
      interface IParams {
        /** Params sendEnabled */
        sendEnabled?: cosmos.bank.v1beta1.ISendEnabled[] | null;

        /** Params defaultSendEnabled */
        defaultSendEnabled?: boolean | null;
      }

      /** Represents a Params. */
      class Params implements IParams {
        /**
         * Constructs a new Params.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.bank.v1beta1.IParams);

        /** Params sendEnabled. */
        public sendEnabled: cosmos.bank.v1beta1.ISendEnabled[];

        /** Params defaultSendEnabled. */
        public defaultSendEnabled: boolean;

        /**
         * Creates a new Params instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Params instance
         */
        public static create(
          properties?: cosmos.bank.v1beta1.IParams
        ): cosmos.bank.v1beta1.Params;

        /**
         * Encodes the specified Params message. Does not implicitly {@link cosmos.bank.v1beta1.Params.verify|verify} messages.
         * @param m Params message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.bank.v1beta1.IParams,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a Params message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Params
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.bank.v1beta1.Params;

        /**
         * Creates a Params message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns Params
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.bank.v1beta1.Params;

        /**
         * Creates a plain object from a Params message. Also converts values to other types if specified.
         * @param m Params
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.bank.v1beta1.Params,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this Params to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a SendEnabled. */
      interface ISendEnabled {
        /** SendEnabled denom */
        denom?: string | null;

        /** SendEnabled enabled */
        enabled?: boolean | null;
      }

      /** Represents a SendEnabled. */
      class SendEnabled implements ISendEnabled {
        /**
         * Constructs a new SendEnabled.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.bank.v1beta1.ISendEnabled);

        /** SendEnabled denom. */
        public denom: string;

        /** SendEnabled enabled. */
        public enabled: boolean;

        /**
         * Creates a new SendEnabled instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendEnabled instance
         */
        public static create(
          properties?: cosmos.bank.v1beta1.ISendEnabled
        ): cosmos.bank.v1beta1.SendEnabled;

        /**
         * Encodes the specified SendEnabled message. Does not implicitly {@link cosmos.bank.v1beta1.SendEnabled.verify|verify} messages.
         * @param m SendEnabled message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.bank.v1beta1.ISendEnabled,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a SendEnabled message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SendEnabled
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.bank.v1beta1.SendEnabled;

        /**
         * Creates a SendEnabled message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns SendEnabled
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.bank.v1beta1.SendEnabled;

        /**
         * Creates a plain object from a SendEnabled message. Also converts values to other types if specified.
         * @param m SendEnabled
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.bank.v1beta1.SendEnabled,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this SendEnabled to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of an Input. */
      interface IInput {
        /** Input address */
        address?: string | null;

        /** Input coins */
        coins?: cosmos.base.v1beta1.ICoin[] | null;
      }

      /** Represents an Input. */
      class Input implements IInput {
        /**
         * Constructs a new Input.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.bank.v1beta1.IInput);

        /** Input address. */
        public address: string;

        /** Input coins. */
        public coins: cosmos.base.v1beta1.ICoin[];

        /**
         * Creates a new Input instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Input instance
         */
        public static create(
          properties?: cosmos.bank.v1beta1.IInput
        ): cosmos.bank.v1beta1.Input;

        /**
         * Encodes the specified Input message. Does not implicitly {@link cosmos.bank.v1beta1.Input.verify|verify} messages.
         * @param m Input message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.bank.v1beta1.IInput,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes an Input message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Input
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.bank.v1beta1.Input;

        /**
         * Creates an Input message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns Input
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.bank.v1beta1.Input;

        /**
         * Creates a plain object from an Input message. Also converts values to other types if specified.
         * @param m Input
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.bank.v1beta1.Input,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this Input to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of an Output. */
      interface IOutput {
        /** Output address */
        address?: string | null;

        /** Output coins */
        coins?: cosmos.base.v1beta1.ICoin[] | null;
      }

      /** Represents an Output. */
      class Output implements IOutput {
        /**
         * Constructs a new Output.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.bank.v1beta1.IOutput);

        /** Output address. */
        public address: string;

        /** Output coins. */
        public coins: cosmos.base.v1beta1.ICoin[];

        /**
         * Creates a new Output instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Output instance
         */
        public static create(
          properties?: cosmos.bank.v1beta1.IOutput
        ): cosmos.bank.v1beta1.Output;

        /**
         * Encodes the specified Output message. Does not implicitly {@link cosmos.bank.v1beta1.Output.verify|verify} messages.
         * @param m Output message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.bank.v1beta1.IOutput,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes an Output message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Output
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.bank.v1beta1.Output;

        /**
         * Creates an Output message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns Output
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.bank.v1beta1.Output;

        /**
         * Creates a plain object from an Output message. Also converts values to other types if specified.
         * @param m Output
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.bank.v1beta1.Output,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this Output to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a Supply. */
      interface ISupply {
        /** Supply total */
        total?: cosmos.base.v1beta1.ICoin[] | null;
      }

      /** Represents a Supply. */
      class Supply implements ISupply {
        /**
         * Constructs a new Supply.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.bank.v1beta1.ISupply);

        /** Supply total. */
        public total: cosmos.base.v1beta1.ICoin[];

        /**
         * Creates a new Supply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Supply instance
         */
        public static create(
          properties?: cosmos.bank.v1beta1.ISupply
        ): cosmos.bank.v1beta1.Supply;

        /**
         * Encodes the specified Supply message. Does not implicitly {@link cosmos.bank.v1beta1.Supply.verify|verify} messages.
         * @param m Supply message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.bank.v1beta1.ISupply,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a Supply message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Supply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.bank.v1beta1.Supply;

        /**
         * Creates a Supply message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns Supply
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.bank.v1beta1.Supply;

        /**
         * Creates a plain object from a Supply message. Also converts values to other types if specified.
         * @param m Supply
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.bank.v1beta1.Supply,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this Supply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a DenomUnit. */
      interface IDenomUnit {
        /** DenomUnit denom */
        denom?: string | null;

        /** DenomUnit exponent */
        exponent?: number | null;

        /** DenomUnit aliases */
        aliases?: string[] | null;
      }

      /** Represents a DenomUnit. */
      class DenomUnit implements IDenomUnit {
        /**
         * Constructs a new DenomUnit.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.bank.v1beta1.IDenomUnit);

        /** DenomUnit denom. */
        public denom: string;

        /** DenomUnit exponent. */
        public exponent: number;

        /** DenomUnit aliases. */
        public aliases: string[];

        /**
         * Creates a new DenomUnit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DenomUnit instance
         */
        public static create(
          properties?: cosmos.bank.v1beta1.IDenomUnit
        ): cosmos.bank.v1beta1.DenomUnit;

        /**
         * Encodes the specified DenomUnit message. Does not implicitly {@link cosmos.bank.v1beta1.DenomUnit.verify|verify} messages.
         * @param m DenomUnit message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.bank.v1beta1.IDenomUnit,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a DenomUnit message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DenomUnit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.bank.v1beta1.DenomUnit;

        /**
         * Creates a DenomUnit message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns DenomUnit
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.bank.v1beta1.DenomUnit;

        /**
         * Creates a plain object from a DenomUnit message. Also converts values to other types if specified.
         * @param m DenomUnit
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.bank.v1beta1.DenomUnit,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this DenomUnit to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a Metadata. */
      interface IMetadata {
        /** Metadata description */
        description?: string | null;

        /** Metadata denomUnits */
        denomUnits?: cosmos.bank.v1beta1.IDenomUnit[] | null;

        /** Metadata base */
        base?: string | null;

        /** Metadata display */
        display?: string | null;

        /** Metadata name */
        name?: string | null;

        /** Metadata symbol */
        symbol?: string | null;

        /** Metadata uri */
        uri?: string | null;

        /** Metadata uriHash */
        uriHash?: string | null;
      }

      /** Represents a Metadata. */
      class Metadata implements IMetadata {
        /**
         * Constructs a new Metadata.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.bank.v1beta1.IMetadata);

        /** Metadata description. */
        public description: string;

        /** Metadata denomUnits. */
        public denomUnits: cosmos.bank.v1beta1.IDenomUnit[];

        /** Metadata base. */
        public base: string;

        /** Metadata display. */
        public display: string;

        /** Metadata name. */
        public name: string;

        /** Metadata symbol. */
        public symbol: string;

        /** Metadata uri. */
        public uri: string;

        /** Metadata uriHash. */
        public uriHash: string;

        /**
         * Creates a new Metadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Metadata instance
         */
        public static create(
          properties?: cosmos.bank.v1beta1.IMetadata
        ): cosmos.bank.v1beta1.Metadata;

        /**
         * Encodes the specified Metadata message. Does not implicitly {@link cosmos.bank.v1beta1.Metadata.verify|verify} messages.
         * @param m Metadata message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.bank.v1beta1.IMetadata,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a Metadata message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Metadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.bank.v1beta1.Metadata;

        /**
         * Creates a Metadata message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns Metadata
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.bank.v1beta1.Metadata;

        /**
         * Creates a plain object from a Metadata message. Also converts values to other types if specified.
         * @param m Metadata
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.bank.v1beta1.Metadata,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this Metadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }
    }
  }

  /** Namespace gov. */
  namespace gov {
    /** Namespace v1beta1. */
    namespace v1beta1 {
      /** VoteOption enum. */
      enum VoteOption {
        VOTE_OPTION_UNSPECIFIED = 0,
        VOTE_OPTION_YES = 1,
        VOTE_OPTION_ABSTAIN = 2,
        VOTE_OPTION_NO = 3,
        VOTE_OPTION_NO_WITH_VETO = 4,
      }

      /** Properties of a WeightedVoteOption. */
      interface IWeightedVoteOption {
        /** WeightedVoteOption option */
        option?: cosmos.gov.v1beta1.VoteOption | null;

        /** WeightedVoteOption weight */
        weight?: string | null;
      }

      /** Represents a WeightedVoteOption. */
      class WeightedVoteOption implements IWeightedVoteOption {
        /**
         * Constructs a new WeightedVoteOption.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.gov.v1beta1.IWeightedVoteOption);

        /** WeightedVoteOption option. */
        public option: cosmos.gov.v1beta1.VoteOption;

        /** WeightedVoteOption weight. */
        public weight: string;

        /**
         * Creates a new WeightedVoteOption instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WeightedVoteOption instance
         */
        public static create(
          properties?: cosmos.gov.v1beta1.IWeightedVoteOption
        ): cosmos.gov.v1beta1.WeightedVoteOption;

        /**
         * Encodes the specified WeightedVoteOption message. Does not implicitly {@link cosmos.gov.v1beta1.WeightedVoteOption.verify|verify} messages.
         * @param m WeightedVoteOption message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.gov.v1beta1.IWeightedVoteOption,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a WeightedVoteOption message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns WeightedVoteOption
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.gov.v1beta1.WeightedVoteOption;

        /**
         * Creates a WeightedVoteOption message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns WeightedVoteOption
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.gov.v1beta1.WeightedVoteOption;

        /**
         * Creates a plain object from a WeightedVoteOption message. Also converts values to other types if specified.
         * @param m WeightedVoteOption
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.gov.v1beta1.WeightedVoteOption,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this WeightedVoteOption to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a TextProposal. */
      interface ITextProposal {
        /** TextProposal title */
        title?: string | null;

        /** TextProposal description */
        description?: string | null;
      }

      /** Represents a TextProposal. */
      class TextProposal implements ITextProposal {
        /**
         * Constructs a new TextProposal.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.gov.v1beta1.ITextProposal);

        /** TextProposal title. */
        public title: string;

        /** TextProposal description. */
        public description: string;

        /**
         * Creates a new TextProposal instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TextProposal instance
         */
        public static create(
          properties?: cosmos.gov.v1beta1.ITextProposal
        ): cosmos.gov.v1beta1.TextProposal;

        /**
         * Encodes the specified TextProposal message. Does not implicitly {@link cosmos.gov.v1beta1.TextProposal.verify|verify} messages.
         * @param m TextProposal message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.gov.v1beta1.ITextProposal,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a TextProposal message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns TextProposal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.gov.v1beta1.TextProposal;

        /**
         * Creates a TextProposal message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns TextProposal
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.gov.v1beta1.TextProposal;

        /**
         * Creates a plain object from a TextProposal message. Also converts values to other types if specified.
         * @param m TextProposal
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.gov.v1beta1.TextProposal,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this TextProposal to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a Deposit. */
      interface IDeposit {
        /** Deposit proposalId */
        proposalId?: Long | null;

        /** Deposit depositor */
        depositor?: string | null;

        /** Deposit amount */
        amount?: cosmos.base.v1beta1.ICoin[] | null;
      }

      /** Represents a Deposit. */
      class Deposit implements IDeposit {
        /**
         * Constructs a new Deposit.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.gov.v1beta1.IDeposit);

        /** Deposit proposalId. */
        public proposalId: Long;

        /** Deposit depositor. */
        public depositor: string;

        /** Deposit amount. */
        public amount: cosmos.base.v1beta1.ICoin[];

        /**
         * Creates a new Deposit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Deposit instance
         */
        public static create(
          properties?: cosmos.gov.v1beta1.IDeposit
        ): cosmos.gov.v1beta1.Deposit;

        /**
         * Encodes the specified Deposit message. Does not implicitly {@link cosmos.gov.v1beta1.Deposit.verify|verify} messages.
         * @param m Deposit message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.gov.v1beta1.IDeposit,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a Deposit message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Deposit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.gov.v1beta1.Deposit;

        /**
         * Creates a Deposit message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns Deposit
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.gov.v1beta1.Deposit;

        /**
         * Creates a plain object from a Deposit message. Also converts values to other types if specified.
         * @param m Deposit
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.gov.v1beta1.Deposit,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this Deposit to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a Proposal. */
      interface IProposal {
        /** Proposal proposalId */
        proposalId?: Long | null;

        /** Proposal content */
        content?: google.protobuf.IAny | null;

        /** Proposal status */
        status?: cosmos.gov.v1beta1.ProposalStatus | null;

        /** Proposal finalTallyResult */
        finalTallyResult?: cosmos.gov.v1beta1.ITallyResult | null;

        /** Proposal submitTime */
        submitTime?: google.protobuf.ITimestamp | null;

        /** Proposal depositEndTime */
        depositEndTime?: google.protobuf.ITimestamp | null;

        /** Proposal totalDeposit */
        totalDeposit?: cosmos.base.v1beta1.ICoin[] | null;

        /** Proposal votingStartTime */
        votingStartTime?: google.protobuf.ITimestamp | null;

        /** Proposal votingEndTime */
        votingEndTime?: google.protobuf.ITimestamp | null;
      }

      /** Represents a Proposal. */
      class Proposal implements IProposal {
        /**
         * Constructs a new Proposal.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.gov.v1beta1.IProposal);

        /** Proposal proposalId. */
        public proposalId: Long;

        /** Proposal content. */
        public content?: google.protobuf.IAny | null;

        /** Proposal status. */
        public status: cosmos.gov.v1beta1.ProposalStatus;

        /** Proposal finalTallyResult. */
        public finalTallyResult?: cosmos.gov.v1beta1.ITallyResult | null;

        /** Proposal submitTime. */
        public submitTime?: google.protobuf.ITimestamp | null;

        /** Proposal depositEndTime. */
        public depositEndTime?: google.protobuf.ITimestamp | null;

        /** Proposal totalDeposit. */
        public totalDeposit: cosmos.base.v1beta1.ICoin[];

        /** Proposal votingStartTime. */
        public votingStartTime?: google.protobuf.ITimestamp | null;

        /** Proposal votingEndTime. */
        public votingEndTime?: google.protobuf.ITimestamp | null;

        /**
         * Creates a new Proposal instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Proposal instance
         */
        public static create(
          properties?: cosmos.gov.v1beta1.IProposal
        ): cosmos.gov.v1beta1.Proposal;

        /**
         * Encodes the specified Proposal message. Does not implicitly {@link cosmos.gov.v1beta1.Proposal.verify|verify} messages.
         * @param m Proposal message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.gov.v1beta1.IProposal,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a Proposal message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Proposal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.gov.v1beta1.Proposal;

        /**
         * Creates a Proposal message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns Proposal
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.gov.v1beta1.Proposal;

        /**
         * Creates a plain object from a Proposal message. Also converts values to other types if specified.
         * @param m Proposal
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.gov.v1beta1.Proposal,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this Proposal to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** ProposalStatus enum. */
      enum ProposalStatus {
        PROPOSAL_STATUS_UNSPECIFIED = 0,
        PROPOSAL_STATUS_DEPOSIT_PERIOD = 1,
        PROPOSAL_STATUS_VOTING_PERIOD = 2,
        PROPOSAL_STATUS_PASSED = 3,
        PROPOSAL_STATUS_REJECTED = 4,
        PROPOSAL_STATUS_FAILED = 5,
      }

      /** Properties of a TallyResult. */
      interface ITallyResult {
        /** TallyResult yes */
        yes?: string | null;

        /** TallyResult abstain */
        abstain?: string | null;

        /** TallyResult no */
        no?: string | null;

        /** TallyResult noWithVeto */
        noWithVeto?: string | null;
      }

      /** Represents a TallyResult. */
      class TallyResult implements ITallyResult {
        /**
         * Constructs a new TallyResult.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.gov.v1beta1.ITallyResult);

        /** TallyResult yes. */
        public yes: string;

        /** TallyResult abstain. */
        public abstain: string;

        /** TallyResult no. */
        public no: string;

        /** TallyResult noWithVeto. */
        public noWithVeto: string;

        /**
         * Creates a new TallyResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TallyResult instance
         */
        public static create(
          properties?: cosmos.gov.v1beta1.ITallyResult
        ): cosmos.gov.v1beta1.TallyResult;

        /**
         * Encodes the specified TallyResult message. Does not implicitly {@link cosmos.gov.v1beta1.TallyResult.verify|verify} messages.
         * @param m TallyResult message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.gov.v1beta1.ITallyResult,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a TallyResult message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns TallyResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.gov.v1beta1.TallyResult;

        /**
         * Creates a TallyResult message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns TallyResult
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.gov.v1beta1.TallyResult;

        /**
         * Creates a plain object from a TallyResult message. Also converts values to other types if specified.
         * @param m TallyResult
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.gov.v1beta1.TallyResult,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this TallyResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a Vote. */
      interface IVote {
        /** Vote proposalId */
        proposalId?: Long | null;

        /** Vote voter */
        voter?: string | null;

        /** Vote option */
        option?: cosmos.gov.v1beta1.VoteOption | null;

        /** Vote options */
        options?: cosmos.gov.v1beta1.IWeightedVoteOption[] | null;
      }

      /** Represents a Vote. */
      class Vote implements IVote {
        /**
         * Constructs a new Vote.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.gov.v1beta1.IVote);

        /** Vote proposalId. */
        public proposalId: Long;

        /** Vote voter. */
        public voter: string;

        /** Vote option. */
        public option: cosmos.gov.v1beta1.VoteOption;

        /** Vote options. */
        public options: cosmos.gov.v1beta1.IWeightedVoteOption[];

        /**
         * Creates a new Vote instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Vote instance
         */
        public static create(
          properties?: cosmos.gov.v1beta1.IVote
        ): cosmos.gov.v1beta1.Vote;

        /**
         * Encodes the specified Vote message. Does not implicitly {@link cosmos.gov.v1beta1.Vote.verify|verify} messages.
         * @param m Vote message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.gov.v1beta1.IVote,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a Vote message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Vote
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.gov.v1beta1.Vote;

        /**
         * Creates a Vote message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns Vote
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.gov.v1beta1.Vote;

        /**
         * Creates a plain object from a Vote message. Also converts values to other types if specified.
         * @param m Vote
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.gov.v1beta1.Vote,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this Vote to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a DepositParams. */
      interface IDepositParams {
        /** DepositParams minDeposit */
        minDeposit?: cosmos.base.v1beta1.ICoin[] | null;

        /** DepositParams maxDepositPeriod */
        maxDepositPeriod?: google.protobuf.IDuration | null;
      }

      /** Represents a DepositParams. */
      class DepositParams implements IDepositParams {
        /**
         * Constructs a new DepositParams.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.gov.v1beta1.IDepositParams);

        /** DepositParams minDeposit. */
        public minDeposit: cosmos.base.v1beta1.ICoin[];

        /** DepositParams maxDepositPeriod. */
        public maxDepositPeriod?: google.protobuf.IDuration | null;

        /**
         * Creates a new DepositParams instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DepositParams instance
         */
        public static create(
          properties?: cosmos.gov.v1beta1.IDepositParams
        ): cosmos.gov.v1beta1.DepositParams;

        /**
         * Encodes the specified DepositParams message. Does not implicitly {@link cosmos.gov.v1beta1.DepositParams.verify|verify} messages.
         * @param m DepositParams message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.gov.v1beta1.IDepositParams,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a DepositParams message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DepositParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.gov.v1beta1.DepositParams;

        /**
         * Creates a DepositParams message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns DepositParams
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.gov.v1beta1.DepositParams;

        /**
         * Creates a plain object from a DepositParams message. Also converts values to other types if specified.
         * @param m DepositParams
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.gov.v1beta1.DepositParams,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this DepositParams to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a VotingParams. */
      interface IVotingParams {
        /** VotingParams votingPeriod */
        votingPeriod?: google.protobuf.IDuration | null;
      }

      /** Represents a VotingParams. */
      class VotingParams implements IVotingParams {
        /**
         * Constructs a new VotingParams.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.gov.v1beta1.IVotingParams);

        /** VotingParams votingPeriod. */
        public votingPeriod?: google.protobuf.IDuration | null;

        /**
         * Creates a new VotingParams instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VotingParams instance
         */
        public static create(
          properties?: cosmos.gov.v1beta1.IVotingParams
        ): cosmos.gov.v1beta1.VotingParams;

        /**
         * Encodes the specified VotingParams message. Does not implicitly {@link cosmos.gov.v1beta1.VotingParams.verify|verify} messages.
         * @param m VotingParams message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.gov.v1beta1.IVotingParams,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a VotingParams message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns VotingParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.gov.v1beta1.VotingParams;

        /**
         * Creates a VotingParams message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns VotingParams
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.gov.v1beta1.VotingParams;

        /**
         * Creates a plain object from a VotingParams message. Also converts values to other types if specified.
         * @param m VotingParams
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.gov.v1beta1.VotingParams,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this VotingParams to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a TallyParams. */
      interface ITallyParams {
        /** TallyParams quorum */
        quorum?: Uint8Array | null;

        /** TallyParams threshold */
        threshold?: Uint8Array | null;

        /** TallyParams vetoThreshold */
        vetoThreshold?: Uint8Array | null;
      }

      /** Represents a TallyParams. */
      class TallyParams implements ITallyParams {
        /**
         * Constructs a new TallyParams.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.gov.v1beta1.ITallyParams);

        /** TallyParams quorum. */
        public quorum: Uint8Array;

        /** TallyParams threshold. */
        public threshold: Uint8Array;

        /** TallyParams vetoThreshold. */
        public vetoThreshold: Uint8Array;

        /**
         * Creates a new TallyParams instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TallyParams instance
         */
        public static create(
          properties?: cosmos.gov.v1beta1.ITallyParams
        ): cosmos.gov.v1beta1.TallyParams;

        /**
         * Encodes the specified TallyParams message. Does not implicitly {@link cosmos.gov.v1beta1.TallyParams.verify|verify} messages.
         * @param m TallyParams message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.gov.v1beta1.ITallyParams,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a TallyParams message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns TallyParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.gov.v1beta1.TallyParams;

        /**
         * Creates a TallyParams message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns TallyParams
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.gov.v1beta1.TallyParams;

        /**
         * Creates a plain object from a TallyParams message. Also converts values to other types if specified.
         * @param m TallyParams
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.gov.v1beta1.TallyParams,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this TallyParams to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Represents a Msg */
      class Msg extends $protobuf.rpc.Service {
        /**
         * Constructs a new Msg service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(
          rpcImpl: $protobuf.RPCImpl,
          requestDelimited?: boolean,
          responseDelimited?: boolean
        );

        /**
         * Creates new Msg service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(
          rpcImpl: $protobuf.RPCImpl,
          requestDelimited?: boolean,
          responseDelimited?: boolean
        ): Msg;

        /**
         * Calls SubmitProposal.
         * @param request MsgSubmitProposal message or plain object
         * @param callback Node-style callback called with the error, if any, and MsgSubmitProposalResponse
         */
        public submitProposal(
          request: cosmos.gov.v1beta1.IMsgSubmitProposal,
          callback: cosmos.gov.v1beta1.Msg.SubmitProposalCallback
        ): void;

        /**
         * Calls SubmitProposal.
         * @param request MsgSubmitProposal message or plain object
         * @returns Promise
         */
        public submitProposal(
          request: cosmos.gov.v1beta1.IMsgSubmitProposal
        ): Promise<cosmos.gov.v1beta1.MsgSubmitProposalResponse>;

        /**
         * Calls Vote.
         * @param request MsgVote message or plain object
         * @param callback Node-style callback called with the error, if any, and MsgVoteResponse
         */
        public vote(
          request: cosmos.gov.v1beta1.IMsgVote,
          callback: cosmos.gov.v1beta1.Msg.VoteCallback
        ): void;

        /**
         * Calls Vote.
         * @param request MsgVote message or plain object
         * @returns Promise
         */
        public vote(
          request: cosmos.gov.v1beta1.IMsgVote
        ): Promise<cosmos.gov.v1beta1.MsgVoteResponse>;

        /**
         * Calls VoteWeighted.
         * @param request MsgVoteWeighted message or plain object
         * @param callback Node-style callback called with the error, if any, and MsgVoteWeightedResponse
         */
        public voteWeighted(
          request: cosmos.gov.v1beta1.IMsgVoteWeighted,
          callback: cosmos.gov.v1beta1.Msg.VoteWeightedCallback
        ): void;

        /**
         * Calls VoteWeighted.
         * @param request MsgVoteWeighted message or plain object
         * @returns Promise
         */
        public voteWeighted(
          request: cosmos.gov.v1beta1.IMsgVoteWeighted
        ): Promise<cosmos.gov.v1beta1.MsgVoteWeightedResponse>;

        /**
         * Calls Deposit.
         * @param request MsgDeposit message or plain object
         * @param callback Node-style callback called with the error, if any, and MsgDepositResponse
         */
        public deposit(
          request: cosmos.gov.v1beta1.IMsgDeposit,
          callback: cosmos.gov.v1beta1.Msg.DepositCallback
        ): void;

        /**
         * Calls Deposit.
         * @param request MsgDeposit message or plain object
         * @returns Promise
         */
        public deposit(
          request: cosmos.gov.v1beta1.IMsgDeposit
        ): Promise<cosmos.gov.v1beta1.MsgDepositResponse>;
      }

      namespace Msg {
        /**
         * Callback as used by {@link cosmos.gov.v1beta1.Msg#submitProposal}.
         * @param error Error, if any
         * @param [response] MsgSubmitProposalResponse
         */
        type SubmitProposalCallback = (
          error: Error | null,
          response?: cosmos.gov.v1beta1.MsgSubmitProposalResponse
        ) => void;

        /**
         * Callback as used by {@link cosmos.gov.v1beta1.Msg#vote}.
         * @param error Error, if any
         * @param [response] MsgVoteResponse
         */
        type VoteCallback = (
          error: Error | null,
          response?: cosmos.gov.v1beta1.MsgVoteResponse
        ) => void;

        /**
         * Callback as used by {@link cosmos.gov.v1beta1.Msg#voteWeighted}.
         * @param error Error, if any
         * @param [response] MsgVoteWeightedResponse
         */
        type VoteWeightedCallback = (
          error: Error | null,
          response?: cosmos.gov.v1beta1.MsgVoteWeightedResponse
        ) => void;

        /**
         * Callback as used by {@link cosmos.gov.v1beta1.Msg#deposit}.
         * @param error Error, if any
         * @param [response] MsgDepositResponse
         */
        type DepositCallback = (
          error: Error | null,
          response?: cosmos.gov.v1beta1.MsgDepositResponse
        ) => void;
      }

      /** Properties of a MsgSubmitProposal. */
      interface IMsgSubmitProposal {
        /** MsgSubmitProposal content */
        content?: google.protobuf.IAny | null;

        /** MsgSubmitProposal initialDeposit */
        initialDeposit?: cosmos.base.v1beta1.ICoin[] | null;

        /** MsgSubmitProposal proposer */
        proposer?: string | null;
      }

      /** Represents a MsgSubmitProposal. */
      class MsgSubmitProposal implements IMsgSubmitProposal {
        /**
         * Constructs a new MsgSubmitProposal.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.gov.v1beta1.IMsgSubmitProposal);

        /** MsgSubmitProposal content. */
        public content?: google.protobuf.IAny | null;

        /** MsgSubmitProposal initialDeposit. */
        public initialDeposit: cosmos.base.v1beta1.ICoin[];

        /** MsgSubmitProposal proposer. */
        public proposer: string;

        /**
         * Creates a new MsgSubmitProposal instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgSubmitProposal instance
         */
        public static create(
          properties?: cosmos.gov.v1beta1.IMsgSubmitProposal
        ): cosmos.gov.v1beta1.MsgSubmitProposal;

        /**
         * Encodes the specified MsgSubmitProposal message. Does not implicitly {@link cosmos.gov.v1beta1.MsgSubmitProposal.verify|verify} messages.
         * @param m MsgSubmitProposal message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.gov.v1beta1.IMsgSubmitProposal,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a MsgSubmitProposal message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgSubmitProposal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.gov.v1beta1.MsgSubmitProposal;

        /**
         * Creates a MsgSubmitProposal message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns MsgSubmitProposal
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.gov.v1beta1.MsgSubmitProposal;

        /**
         * Creates a plain object from a MsgSubmitProposal message. Also converts values to other types if specified.
         * @param m MsgSubmitProposal
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.gov.v1beta1.MsgSubmitProposal,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this MsgSubmitProposal to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a MsgSubmitProposalResponse. */
      interface IMsgSubmitProposalResponse {
        /** MsgSubmitProposalResponse proposalId */
        proposalId?: Long | null;
      }

      /** Represents a MsgSubmitProposalResponse. */
      class MsgSubmitProposalResponse implements IMsgSubmitProposalResponse {
        /**
         * Constructs a new MsgSubmitProposalResponse.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.gov.v1beta1.IMsgSubmitProposalResponse);

        /** MsgSubmitProposalResponse proposalId. */
        public proposalId: Long;

        /**
         * Creates a new MsgSubmitProposalResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgSubmitProposalResponse instance
         */
        public static create(
          properties?: cosmos.gov.v1beta1.IMsgSubmitProposalResponse
        ): cosmos.gov.v1beta1.MsgSubmitProposalResponse;

        /**
         * Encodes the specified MsgSubmitProposalResponse message. Does not implicitly {@link cosmos.gov.v1beta1.MsgSubmitProposalResponse.verify|verify} messages.
         * @param m MsgSubmitProposalResponse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.gov.v1beta1.IMsgSubmitProposalResponse,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a MsgSubmitProposalResponse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgSubmitProposalResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.gov.v1beta1.MsgSubmitProposalResponse;

        /**
         * Creates a MsgSubmitProposalResponse message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns MsgSubmitProposalResponse
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.gov.v1beta1.MsgSubmitProposalResponse;

        /**
         * Creates a plain object from a MsgSubmitProposalResponse message. Also converts values to other types if specified.
         * @param m MsgSubmitProposalResponse
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.gov.v1beta1.MsgSubmitProposalResponse,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this MsgSubmitProposalResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a MsgVote. */
      interface IMsgVote {
        /** MsgVote proposalId */
        proposalId?: Long | null;

        /** MsgVote voter */
        voter?: string | null;

        /** MsgVote option */
        option?: cosmos.gov.v1beta1.VoteOption | null;
      }

      /** Represents a MsgVote. */
      class MsgVote implements IMsgVote {
        /**
         * Constructs a new MsgVote.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.gov.v1beta1.IMsgVote);

        /** MsgVote proposalId. */
        public proposalId: Long;

        /** MsgVote voter. */
        public voter: string;

        /** MsgVote option. */
        public option: cosmos.gov.v1beta1.VoteOption;

        /**
         * Creates a new MsgVote instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgVote instance
         */
        public static create(
          properties?: cosmos.gov.v1beta1.IMsgVote
        ): cosmos.gov.v1beta1.MsgVote;

        /**
         * Encodes the specified MsgVote message. Does not implicitly {@link cosmos.gov.v1beta1.MsgVote.verify|verify} messages.
         * @param m MsgVote message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.gov.v1beta1.IMsgVote,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a MsgVote message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgVote
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.gov.v1beta1.MsgVote;

        /**
         * Creates a MsgVote message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns MsgVote
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.gov.v1beta1.MsgVote;

        /**
         * Creates a plain object from a MsgVote message. Also converts values to other types if specified.
         * @param m MsgVote
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.gov.v1beta1.MsgVote,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this MsgVote to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a MsgVoteResponse. */
      interface IMsgVoteResponse {}

      /** Represents a MsgVoteResponse. */
      class MsgVoteResponse implements IMsgVoteResponse {
        /**
         * Constructs a new MsgVoteResponse.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.gov.v1beta1.IMsgVoteResponse);

        /**
         * Creates a new MsgVoteResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgVoteResponse instance
         */
        public static create(
          properties?: cosmos.gov.v1beta1.IMsgVoteResponse
        ): cosmos.gov.v1beta1.MsgVoteResponse;

        /**
         * Encodes the specified MsgVoteResponse message. Does not implicitly {@link cosmos.gov.v1beta1.MsgVoteResponse.verify|verify} messages.
         * @param m MsgVoteResponse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.gov.v1beta1.IMsgVoteResponse,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a MsgVoteResponse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgVoteResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.gov.v1beta1.MsgVoteResponse;

        /**
         * Creates a MsgVoteResponse message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns MsgVoteResponse
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.gov.v1beta1.MsgVoteResponse;

        /**
         * Creates a plain object from a MsgVoteResponse message. Also converts values to other types if specified.
         * @param m MsgVoteResponse
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.gov.v1beta1.MsgVoteResponse,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this MsgVoteResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a MsgVoteWeighted. */
      interface IMsgVoteWeighted {
        /** MsgVoteWeighted proposalId */
        proposalId?: Long | null;

        /** MsgVoteWeighted voter */
        voter?: string | null;

        /** MsgVoteWeighted options */
        options?: cosmos.gov.v1beta1.IWeightedVoteOption[] | null;
      }

      /** Represents a MsgVoteWeighted. */
      class MsgVoteWeighted implements IMsgVoteWeighted {
        /**
         * Constructs a new MsgVoteWeighted.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.gov.v1beta1.IMsgVoteWeighted);

        /** MsgVoteWeighted proposalId. */
        public proposalId: Long;

        /** MsgVoteWeighted voter. */
        public voter: string;

        /** MsgVoteWeighted options. */
        public options: cosmos.gov.v1beta1.IWeightedVoteOption[];

        /**
         * Creates a new MsgVoteWeighted instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgVoteWeighted instance
         */
        public static create(
          properties?: cosmos.gov.v1beta1.IMsgVoteWeighted
        ): cosmos.gov.v1beta1.MsgVoteWeighted;

        /**
         * Encodes the specified MsgVoteWeighted message. Does not implicitly {@link cosmos.gov.v1beta1.MsgVoteWeighted.verify|verify} messages.
         * @param m MsgVoteWeighted message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.gov.v1beta1.IMsgVoteWeighted,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a MsgVoteWeighted message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgVoteWeighted
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.gov.v1beta1.MsgVoteWeighted;

        /**
         * Creates a MsgVoteWeighted message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns MsgVoteWeighted
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.gov.v1beta1.MsgVoteWeighted;

        /**
         * Creates a plain object from a MsgVoteWeighted message. Also converts values to other types if specified.
         * @param m MsgVoteWeighted
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.gov.v1beta1.MsgVoteWeighted,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this MsgVoteWeighted to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a MsgVoteWeightedResponse. */
      interface IMsgVoteWeightedResponse {}

      /** Represents a MsgVoteWeightedResponse. */
      class MsgVoteWeightedResponse implements IMsgVoteWeightedResponse {
        /**
         * Constructs a new MsgVoteWeightedResponse.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.gov.v1beta1.IMsgVoteWeightedResponse);

        /**
         * Creates a new MsgVoteWeightedResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgVoteWeightedResponse instance
         */
        public static create(
          properties?: cosmos.gov.v1beta1.IMsgVoteWeightedResponse
        ): cosmos.gov.v1beta1.MsgVoteWeightedResponse;

        /**
         * Encodes the specified MsgVoteWeightedResponse message. Does not implicitly {@link cosmos.gov.v1beta1.MsgVoteWeightedResponse.verify|verify} messages.
         * @param m MsgVoteWeightedResponse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.gov.v1beta1.IMsgVoteWeightedResponse,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a MsgVoteWeightedResponse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgVoteWeightedResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.gov.v1beta1.MsgVoteWeightedResponse;

        /**
         * Creates a MsgVoteWeightedResponse message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns MsgVoteWeightedResponse
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.gov.v1beta1.MsgVoteWeightedResponse;

        /**
         * Creates a plain object from a MsgVoteWeightedResponse message. Also converts values to other types if specified.
         * @param m MsgVoteWeightedResponse
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.gov.v1beta1.MsgVoteWeightedResponse,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this MsgVoteWeightedResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a MsgDeposit. */
      interface IMsgDeposit {
        /** MsgDeposit proposalId */
        proposalId?: Long | null;

        /** MsgDeposit depositor */
        depositor?: string | null;

        /** MsgDeposit amount */
        amount?: cosmos.base.v1beta1.ICoin[] | null;
      }

      /** Represents a MsgDeposit. */
      class MsgDeposit implements IMsgDeposit {
        /**
         * Constructs a new MsgDeposit.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.gov.v1beta1.IMsgDeposit);

        /** MsgDeposit proposalId. */
        public proposalId: Long;

        /** MsgDeposit depositor. */
        public depositor: string;

        /** MsgDeposit amount. */
        public amount: cosmos.base.v1beta1.ICoin[];

        /**
         * Creates a new MsgDeposit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgDeposit instance
         */
        public static create(
          properties?: cosmos.gov.v1beta1.IMsgDeposit
        ): cosmos.gov.v1beta1.MsgDeposit;

        /**
         * Encodes the specified MsgDeposit message. Does not implicitly {@link cosmos.gov.v1beta1.MsgDeposit.verify|verify} messages.
         * @param m MsgDeposit message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.gov.v1beta1.IMsgDeposit,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a MsgDeposit message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgDeposit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.gov.v1beta1.MsgDeposit;

        /**
         * Creates a MsgDeposit message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns MsgDeposit
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.gov.v1beta1.MsgDeposit;

        /**
         * Creates a plain object from a MsgDeposit message. Also converts values to other types if specified.
         * @param m MsgDeposit
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.gov.v1beta1.MsgDeposit,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this MsgDeposit to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a MsgDepositResponse. */
      interface IMsgDepositResponse {}

      /** Represents a MsgDepositResponse. */
      class MsgDepositResponse implements IMsgDepositResponse {
        /**
         * Constructs a new MsgDepositResponse.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.gov.v1beta1.IMsgDepositResponse);

        /**
         * Creates a new MsgDepositResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgDepositResponse instance
         */
        public static create(
          properties?: cosmos.gov.v1beta1.IMsgDepositResponse
        ): cosmos.gov.v1beta1.MsgDepositResponse;

        /**
         * Encodes the specified MsgDepositResponse message. Does not implicitly {@link cosmos.gov.v1beta1.MsgDepositResponse.verify|verify} messages.
         * @param m MsgDepositResponse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.gov.v1beta1.IMsgDepositResponse,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a MsgDepositResponse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgDepositResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.gov.v1beta1.MsgDepositResponse;

        /**
         * Creates a MsgDepositResponse message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns MsgDepositResponse
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.gov.v1beta1.MsgDepositResponse;

        /**
         * Creates a plain object from a MsgDepositResponse message. Also converts values to other types if specified.
         * @param m MsgDepositResponse
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.gov.v1beta1.MsgDepositResponse,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this MsgDepositResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }
    }
  }
}

/** Namespace google. */
export namespace google {
  /** Namespace protobuf. */
  namespace protobuf {
    /** Properties of a Timestamp. */
    interface ITimestamp {
      /** Timestamp seconds */
      seconds?: Long | null;

      /** Timestamp nanos */
      nanos?: number | null;
    }

    /** Represents a Timestamp. */
    class Timestamp implements ITimestamp {
      /**
       * Constructs a new Timestamp.
       * @param [p] Properties to set
       */
      constructor(p?: google.protobuf.ITimestamp);

      /** Timestamp seconds. */
      public seconds: Long;

      /** Timestamp nanos. */
      public nanos: number;

      /**
       * Creates a new Timestamp instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Timestamp instance
       */
      public static create(
        properties?: google.protobuf.ITimestamp
      ): google.protobuf.Timestamp;

      /**
       * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
       * @param m Timestamp message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(
        m: google.protobuf.ITimestamp,
        w?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a Timestamp message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns Timestamp
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        r: $protobuf.Reader | Uint8Array,
        l?: number
      ): google.protobuf.Timestamp;

      /**
       * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
       * @param d Plain object
       * @returns Timestamp
       */
      public static fromObject(d: {
        [k: string]: any;
      }): google.protobuf.Timestamp;

      /**
       * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
       * @param m Timestamp
       * @param [o] Conversion options
       * @returns Plain object
       */
      public static toObject(
        m: google.protobuf.Timestamp,
        o?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this Timestamp to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of an Any. */
    interface IAny {
      /** Any type_url */
      type_url?: string | null;

      /** Any value */
      value?: Uint8Array | null;
    }

    /** Represents an Any. */
    class Any implements IAny {
      /**
       * Constructs a new Any.
       * @param [p] Properties to set
       */
      constructor(p?: google.protobuf.IAny);

      /** Any type_url. */
      public type_url: string;

      /** Any value. */
      public value: Uint8Array;

      /**
       * Creates a new Any instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Any instance
       */
      public static create(
        properties?: google.protobuf.IAny
      ): google.protobuf.Any;

      /**
       * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
       * @param m Any message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(
        m: google.protobuf.IAny,
        w?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes an Any message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns Any
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        r: $protobuf.Reader | Uint8Array,
        l?: number
      ): google.protobuf.Any;

      /**
       * Creates an Any message from a plain object. Also converts values to their respective internal types.
       * @param d Plain object
       * @returns Any
       */
      public static fromObject(d: { [k: string]: any }): google.protobuf.Any;

      /**
       * Creates a plain object from an Any message. Also converts values to other types if specified.
       * @param m Any
       * @param [o] Conversion options
       * @returns Plain object
       */
      public static toObject(
        m: google.protobuf.Any,
        o?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this Any to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a Duration. */
    interface IDuration {
      /** Duration seconds */
      seconds?: Long | null;

      /** Duration nanos */
      nanos?: number | null;
    }

    /** Represents a Duration. */
    class Duration implements IDuration {
      /**
       * Constructs a new Duration.
       * @param [p] Properties to set
       */
      constructor(p?: google.protobuf.IDuration);

      /** Duration seconds. */
      public seconds: Long;

      /** Duration nanos. */
      public nanos: number;

      /**
       * Creates a new Duration instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Duration instance
       */
      public static create(
        properties?: google.protobuf.IDuration
      ): google.protobuf.Duration;

      /**
       * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
       * @param m Duration message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(
        m: google.protobuf.IDuration,
        w?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a Duration message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns Duration
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        r: $protobuf.Reader | Uint8Array,
        l?: number
      ): google.protobuf.Duration;

      /**
       * Creates a Duration message from a plain object. Also converts values to their respective internal types.
       * @param d Plain object
       * @returns Duration
       */
      public static fromObject(d: {
        [k: string]: any;
      }): google.protobuf.Duration;

      /**
       * Creates a plain object from a Duration message. Also converts values to other types if specified.
       * @param m Duration
       * @param [o] Conversion options
       * @returns Plain object
       */
      public static toObject(
        m: google.protobuf.Duration,
        o?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this Duration to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }
  }
}

/** Namespace osmosis. */
export namespace osmosis {
  /** Namespace superfluid. */
  namespace superfluid {
    /** Represents a Msg */
    class Msg extends $protobuf.rpc.Service {
      /**
       * Constructs a new Msg service.
       * @param rpcImpl RPC implementation
       * @param [requestDelimited=false] Whether requests are length-delimited
       * @param [responseDelimited=false] Whether responses are length-delimited
       */
      constructor(
        rpcImpl: $protobuf.RPCImpl,
        requestDelimited?: boolean,
        responseDelimited?: boolean
      );

      /**
       * Creates new Msg service using the specified rpc implementation.
       * @param rpcImpl RPC implementation
       * @param [requestDelimited=false] Whether requests are length-delimited
       * @param [responseDelimited=false] Whether responses are length-delimited
       * @returns RPC service. Useful where requests and/or responses are streamed.
       */
      public static create(
        rpcImpl: $protobuf.RPCImpl,
        requestDelimited?: boolean,
        responseDelimited?: boolean
      ): Msg;

      /**
       * Calls SuperfluidDelegate.
       * @param request MsgSuperfluidDelegate message or plain object
       * @param callback Node-style callback called with the error, if any, and MsgSuperfluidDelegateResponse
       */
      public superfluidDelegate(
        request: osmosis.superfluid.IMsgSuperfluidDelegate,
        callback: osmosis.superfluid.Msg.SuperfluidDelegateCallback
      ): void;

      /**
       * Calls SuperfluidDelegate.
       * @param request MsgSuperfluidDelegate message or plain object
       * @returns Promise
       */
      public superfluidDelegate(
        request: osmosis.superfluid.IMsgSuperfluidDelegate
      ): Promise<osmosis.superfluid.MsgSuperfluidDelegateResponse>;

      /**
       * Calls SuperfluidUndelegate.
       * @param request MsgSuperfluidUndelegate message or plain object
       * @param callback Node-style callback called with the error, if any, and MsgSuperfluidUndelegateResponse
       */
      public superfluidUndelegate(
        request: osmosis.superfluid.IMsgSuperfluidUndelegate,
        callback: osmosis.superfluid.Msg.SuperfluidUndelegateCallback
      ): void;

      /**
       * Calls SuperfluidUndelegate.
       * @param request MsgSuperfluidUndelegate message or plain object
       * @returns Promise
       */
      public superfluidUndelegate(
        request: osmosis.superfluid.IMsgSuperfluidUndelegate
      ): Promise<osmosis.superfluid.MsgSuperfluidUndelegateResponse>;

      /**
       * Calls SuperfluidUnbondLock.
       * @param request MsgSuperfluidUnbondLock message or plain object
       * @param callback Node-style callback called with the error, if any, and MsgSuperfluidUnbondLockResponse
       */
      public superfluidUnbondLock(
        request: osmosis.superfluid.IMsgSuperfluidUnbondLock,
        callback: osmosis.superfluid.Msg.SuperfluidUnbondLockCallback
      ): void;

      /**
       * Calls SuperfluidUnbondLock.
       * @param request MsgSuperfluidUnbondLock message or plain object
       * @returns Promise
       */
      public superfluidUnbondLock(
        request: osmosis.superfluid.IMsgSuperfluidUnbondLock
      ): Promise<osmosis.superfluid.MsgSuperfluidUnbondLockResponse>;

      /**
       * Calls SuperfluidUndelegateAndUnbondLock.
       * @param request MsgSuperfluidUndelegateAndUnbondLock message or plain object
       * @param callback Node-style callback called with the error, if any, and MsgSuperfluidUndelegateAndUnbondLockResponse
       */
      public superfluidUndelegateAndUnbondLock(
        request: osmosis.superfluid.IMsgSuperfluidUndelegateAndUnbondLock,
        callback: osmosis.superfluid.Msg.SuperfluidUndelegateAndUnbondLockCallback
      ): void;

      /**
       * Calls SuperfluidUndelegateAndUnbondLock.
       * @param request MsgSuperfluidUndelegateAndUnbondLock message or plain object
       * @returns Promise
       */
      public superfluidUndelegateAndUnbondLock(
        request: osmosis.superfluid.IMsgSuperfluidUndelegateAndUnbondLock
      ): Promise<osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLockResponse>;

      /**
       * Calls LockAndSuperfluidDelegate.
       * @param request MsgLockAndSuperfluidDelegate message or plain object
       * @param callback Node-style callback called with the error, if any, and MsgLockAndSuperfluidDelegateResponse
       */
      public lockAndSuperfluidDelegate(
        request: osmosis.superfluid.IMsgLockAndSuperfluidDelegate,
        callback: osmosis.superfluid.Msg.LockAndSuperfluidDelegateCallback
      ): void;

      /**
       * Calls LockAndSuperfluidDelegate.
       * @param request MsgLockAndSuperfluidDelegate message or plain object
       * @returns Promise
       */
      public lockAndSuperfluidDelegate(
        request: osmosis.superfluid.IMsgLockAndSuperfluidDelegate
      ): Promise<osmosis.superfluid.MsgLockAndSuperfluidDelegateResponse>;

      /**
       * Calls CreateFullRangePositionAndSuperfluidDelegate.
       * @param request MsgCreateFullRangePositionAndSuperfluidDelegate message or plain object
       * @param callback Node-style callback called with the error, if any, and MsgCreateFullRangePositionAndSuperfluidDelegateResponse
       */
      public createFullRangePositionAndSuperfluidDelegate(
        request: osmosis.superfluid.IMsgCreateFullRangePositionAndSuperfluidDelegate,
        callback: osmosis.superfluid.Msg.CreateFullRangePositionAndSuperfluidDelegateCallback
      ): void;

      /**
       * Calls CreateFullRangePositionAndSuperfluidDelegate.
       * @param request MsgCreateFullRangePositionAndSuperfluidDelegate message or plain object
       * @returns Promise
       */
      public createFullRangePositionAndSuperfluidDelegate(
        request: osmosis.superfluid.IMsgCreateFullRangePositionAndSuperfluidDelegate
      ): Promise<osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegateResponse>;

      /**
       * Calls UnPoolWhitelistedPool.
       * @param request MsgUnPoolWhitelistedPool message or plain object
       * @param callback Node-style callback called with the error, if any, and MsgUnPoolWhitelistedPoolResponse
       */
      public unPoolWhitelistedPool(
        request: osmosis.superfluid.IMsgUnPoolWhitelistedPool,
        callback: osmosis.superfluid.Msg.UnPoolWhitelistedPoolCallback
      ): void;

      /**
       * Calls UnPoolWhitelistedPool.
       * @param request MsgUnPoolWhitelistedPool message or plain object
       * @returns Promise
       */
      public unPoolWhitelistedPool(
        request: osmosis.superfluid.IMsgUnPoolWhitelistedPool
      ): Promise<osmosis.superfluid.MsgUnPoolWhitelistedPoolResponse>;

      /**
       * Calls UnlockAndMigrateSharesToFullRangeConcentratedPosition.
       * @param request MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition message or plain object
       * @param callback Node-style callback called with the error, if any, and MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse
       */
      public unlockAndMigrateSharesToFullRangeConcentratedPosition(
        request: osmosis.superfluid.IMsgUnlockAndMigrateSharesToFullRangeConcentratedPosition,
        callback: osmosis.superfluid.Msg.UnlockAndMigrateSharesToFullRangeConcentratedPositionCallback
      ): void;

      /**
       * Calls UnlockAndMigrateSharesToFullRangeConcentratedPosition.
       * @param request MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition message or plain object
       * @returns Promise
       */
      public unlockAndMigrateSharesToFullRangeConcentratedPosition(
        request: osmosis.superfluid.IMsgUnlockAndMigrateSharesToFullRangeConcentratedPosition
      ): Promise<osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse>;

      /**
       * Calls AddToConcentratedLiquiditySuperfluidPosition.
       * @param request MsgAddToConcentratedLiquiditySuperfluidPosition message or plain object
       * @param callback Node-style callback called with the error, if any, and MsgAddToConcentratedLiquiditySuperfluidPositionResponse
       */
      public addToConcentratedLiquiditySuperfluidPosition(
        request: osmosis.superfluid.IMsgAddToConcentratedLiquiditySuperfluidPosition,
        callback: osmosis.superfluid.Msg.AddToConcentratedLiquiditySuperfluidPositionCallback
      ): void;

      /**
       * Calls AddToConcentratedLiquiditySuperfluidPosition.
       * @param request MsgAddToConcentratedLiquiditySuperfluidPosition message or plain object
       * @returns Promise
       */
      public addToConcentratedLiquiditySuperfluidPosition(
        request: osmosis.superfluid.IMsgAddToConcentratedLiquiditySuperfluidPosition
      ): Promise<osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPositionResponse>;
    }

    namespace Msg {
      /**
       * Callback as used by {@link osmosis.superfluid.Msg#superfluidDelegate}.
       * @param error Error, if any
       * @param [response] MsgSuperfluidDelegateResponse
       */
      type SuperfluidDelegateCallback = (
        error: Error | null,
        response?: osmosis.superfluid.MsgSuperfluidDelegateResponse
      ) => void;

      /**
       * Callback as used by {@link osmosis.superfluid.Msg#superfluidUndelegate}.
       * @param error Error, if any
       * @param [response] MsgSuperfluidUndelegateResponse
       */
      type SuperfluidUndelegateCallback = (
        error: Error | null,
        response?: osmosis.superfluid.MsgSuperfluidUndelegateResponse
      ) => void;

      /**
       * Callback as used by {@link osmosis.superfluid.Msg#superfluidUnbondLock}.
       * @param error Error, if any
       * @param [response] MsgSuperfluidUnbondLockResponse
       */
      type SuperfluidUnbondLockCallback = (
        error: Error | null,
        response?: osmosis.superfluid.MsgSuperfluidUnbondLockResponse
      ) => void;

      /**
       * Callback as used by {@link osmosis.superfluid.Msg#superfluidUndelegateAndUnbondLock}.
       * @param error Error, if any
       * @param [response] MsgSuperfluidUndelegateAndUnbondLockResponse
       */
      type SuperfluidUndelegateAndUnbondLockCallback = (
        error: Error | null,
        response?: osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLockResponse
      ) => void;

      /**
       * Callback as used by {@link osmosis.superfluid.Msg#lockAndSuperfluidDelegate}.
       * @param error Error, if any
       * @param [response] MsgLockAndSuperfluidDelegateResponse
       */
      type LockAndSuperfluidDelegateCallback = (
        error: Error | null,
        response?: osmosis.superfluid.MsgLockAndSuperfluidDelegateResponse
      ) => void;

      /**
       * Callback as used by {@link osmosis.superfluid.Msg#createFullRangePositionAndSuperfluidDelegate}.
       * @param error Error, if any
       * @param [response] MsgCreateFullRangePositionAndSuperfluidDelegateResponse
       */
      type CreateFullRangePositionAndSuperfluidDelegateCallback = (
        error: Error | null,
        response?: osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegateResponse
      ) => void;

      /**
       * Callback as used by {@link osmosis.superfluid.Msg#unPoolWhitelistedPool}.
       * @param error Error, if any
       * @param [response] MsgUnPoolWhitelistedPoolResponse
       */
      type UnPoolWhitelistedPoolCallback = (
        error: Error | null,
        response?: osmosis.superfluid.MsgUnPoolWhitelistedPoolResponse
      ) => void;

      /**
       * Callback as used by {@link osmosis.superfluid.Msg#unlockAndMigrateSharesToFullRangeConcentratedPosition}.
       * @param error Error, if any
       * @param [response] MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse
       */
      type UnlockAndMigrateSharesToFullRangeConcentratedPositionCallback = (
        error: Error | null,
        response?: osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse
      ) => void;

      /**
       * Callback as used by {@link osmosis.superfluid.Msg#addToConcentratedLiquiditySuperfluidPosition}.
       * @param error Error, if any
       * @param [response] MsgAddToConcentratedLiquiditySuperfluidPositionResponse
       */
      type AddToConcentratedLiquiditySuperfluidPositionCallback = (
        error: Error | null,
        response?: osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPositionResponse
      ) => void;
    }

    /** Properties of a MsgSuperfluidDelegate. */
    interface IMsgSuperfluidDelegate {
      /** MsgSuperfluidDelegate sender */
      sender?: string | null;

      /** MsgSuperfluidDelegate lockId */
      lockId?: Long | null;

      /** MsgSuperfluidDelegate valAddr */
      valAddr?: string | null;
    }

    /** Represents a MsgSuperfluidDelegate. */
    class MsgSuperfluidDelegate implements IMsgSuperfluidDelegate {
      /**
       * Constructs a new MsgSuperfluidDelegate.
       * @param [p] Properties to set
       */
      constructor(p?: osmosis.superfluid.IMsgSuperfluidDelegate);

      /** MsgSuperfluidDelegate sender. */
      public sender: string;

      /** MsgSuperfluidDelegate lockId. */
      public lockId: Long;

      /** MsgSuperfluidDelegate valAddr. */
      public valAddr: string;

      /**
       * Creates a new MsgSuperfluidDelegate instance using the specified properties.
       * @param [properties] Properties to set
       * @returns MsgSuperfluidDelegate instance
       */
      public static create(
        properties?: osmosis.superfluid.IMsgSuperfluidDelegate
      ): osmosis.superfluid.MsgSuperfluidDelegate;

      /**
       * Encodes the specified MsgSuperfluidDelegate message. Does not implicitly {@link osmosis.superfluid.MsgSuperfluidDelegate.verify|verify} messages.
       * @param m MsgSuperfluidDelegate message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(
        m: osmosis.superfluid.IMsgSuperfluidDelegate,
        w?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a MsgSuperfluidDelegate message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns MsgSuperfluidDelegate
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        r: $protobuf.Reader | Uint8Array,
        l?: number
      ): osmosis.superfluid.MsgSuperfluidDelegate;

      /**
       * Creates a MsgSuperfluidDelegate message from a plain object. Also converts values to their respective internal types.
       * @param d Plain object
       * @returns MsgSuperfluidDelegate
       */
      public static fromObject(d: {
        [k: string]: any;
      }): osmosis.superfluid.MsgSuperfluidDelegate;

      /**
       * Creates a plain object from a MsgSuperfluidDelegate message. Also converts values to other types if specified.
       * @param m MsgSuperfluidDelegate
       * @param [o] Conversion options
       * @returns Plain object
       */
      public static toObject(
        m: osmosis.superfluid.MsgSuperfluidDelegate,
        o?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this MsgSuperfluidDelegate to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a MsgSuperfluidDelegateResponse. */
    interface IMsgSuperfluidDelegateResponse {}

    /** Represents a MsgSuperfluidDelegateResponse. */
    class MsgSuperfluidDelegateResponse
      implements IMsgSuperfluidDelegateResponse
    {
      /**
       * Constructs a new MsgSuperfluidDelegateResponse.
       * @param [p] Properties to set
       */
      constructor(p?: osmosis.superfluid.IMsgSuperfluidDelegateResponse);

      /**
       * Creates a new MsgSuperfluidDelegateResponse instance using the specified properties.
       * @param [properties] Properties to set
       * @returns MsgSuperfluidDelegateResponse instance
       */
      public static create(
        properties?: osmosis.superfluid.IMsgSuperfluidDelegateResponse
      ): osmosis.superfluid.MsgSuperfluidDelegateResponse;

      /**
       * Encodes the specified MsgSuperfluidDelegateResponse message. Does not implicitly {@link osmosis.superfluid.MsgSuperfluidDelegateResponse.verify|verify} messages.
       * @param m MsgSuperfluidDelegateResponse message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(
        m: osmosis.superfluid.IMsgSuperfluidDelegateResponse,
        w?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a MsgSuperfluidDelegateResponse message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns MsgSuperfluidDelegateResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        r: $protobuf.Reader | Uint8Array,
        l?: number
      ): osmosis.superfluid.MsgSuperfluidDelegateResponse;

      /**
       * Creates a MsgSuperfluidDelegateResponse message from a plain object. Also converts values to their respective internal types.
       * @param d Plain object
       * @returns MsgSuperfluidDelegateResponse
       */
      public static fromObject(d: {
        [k: string]: any;
      }): osmosis.superfluid.MsgSuperfluidDelegateResponse;

      /**
       * Creates a plain object from a MsgSuperfluidDelegateResponse message. Also converts values to other types if specified.
       * @param m MsgSuperfluidDelegateResponse
       * @param [o] Conversion options
       * @returns Plain object
       */
      public static toObject(
        m: osmosis.superfluid.MsgSuperfluidDelegateResponse,
        o?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this MsgSuperfluidDelegateResponse to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a MsgSuperfluidUndelegate. */
    interface IMsgSuperfluidUndelegate {
      /** MsgSuperfluidUndelegate sender */
      sender?: string | null;

      /** MsgSuperfluidUndelegate lockId */
      lockId?: Long | null;
    }

    /** Represents a MsgSuperfluidUndelegate. */
    class MsgSuperfluidUndelegate implements IMsgSuperfluidUndelegate {
      /**
       * Constructs a new MsgSuperfluidUndelegate.
       * @param [p] Properties to set
       */
      constructor(p?: osmosis.superfluid.IMsgSuperfluidUndelegate);

      /** MsgSuperfluidUndelegate sender. */
      public sender: string;

      /** MsgSuperfluidUndelegate lockId. */
      public lockId: Long;

      /**
       * Creates a new MsgSuperfluidUndelegate instance using the specified properties.
       * @param [properties] Properties to set
       * @returns MsgSuperfluidUndelegate instance
       */
      public static create(
        properties?: osmosis.superfluid.IMsgSuperfluidUndelegate
      ): osmosis.superfluid.MsgSuperfluidUndelegate;

      /**
       * Encodes the specified MsgSuperfluidUndelegate message. Does not implicitly {@link osmosis.superfluid.MsgSuperfluidUndelegate.verify|verify} messages.
       * @param m MsgSuperfluidUndelegate message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(
        m: osmosis.superfluid.IMsgSuperfluidUndelegate,
        w?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a MsgSuperfluidUndelegate message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns MsgSuperfluidUndelegate
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        r: $protobuf.Reader | Uint8Array,
        l?: number
      ): osmosis.superfluid.MsgSuperfluidUndelegate;

      /**
       * Creates a MsgSuperfluidUndelegate message from a plain object. Also converts values to their respective internal types.
       * @param d Plain object
       * @returns MsgSuperfluidUndelegate
       */
      public static fromObject(d: {
        [k: string]: any;
      }): osmosis.superfluid.MsgSuperfluidUndelegate;

      /**
       * Creates a plain object from a MsgSuperfluidUndelegate message. Also converts values to other types if specified.
       * @param m MsgSuperfluidUndelegate
       * @param [o] Conversion options
       * @returns Plain object
       */
      public static toObject(
        m: osmosis.superfluid.MsgSuperfluidUndelegate,
        o?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this MsgSuperfluidUndelegate to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a MsgSuperfluidUndelegateResponse. */
    interface IMsgSuperfluidUndelegateResponse {}

    /** Represents a MsgSuperfluidUndelegateResponse. */
    class MsgSuperfluidUndelegateResponse
      implements IMsgSuperfluidUndelegateResponse
    {
      /**
       * Constructs a new MsgSuperfluidUndelegateResponse.
       * @param [p] Properties to set
       */
      constructor(p?: osmosis.superfluid.IMsgSuperfluidUndelegateResponse);

      /**
       * Creates a new MsgSuperfluidUndelegateResponse instance using the specified properties.
       * @param [properties] Properties to set
       * @returns MsgSuperfluidUndelegateResponse instance
       */
      public static create(
        properties?: osmosis.superfluid.IMsgSuperfluidUndelegateResponse
      ): osmosis.superfluid.MsgSuperfluidUndelegateResponse;

      /**
       * Encodes the specified MsgSuperfluidUndelegateResponse message. Does not implicitly {@link osmosis.superfluid.MsgSuperfluidUndelegateResponse.verify|verify} messages.
       * @param m MsgSuperfluidUndelegateResponse message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(
        m: osmosis.superfluid.IMsgSuperfluidUndelegateResponse,
        w?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a MsgSuperfluidUndelegateResponse message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns MsgSuperfluidUndelegateResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        r: $protobuf.Reader | Uint8Array,
        l?: number
      ): osmosis.superfluid.MsgSuperfluidUndelegateResponse;

      /**
       * Creates a MsgSuperfluidUndelegateResponse message from a plain object. Also converts values to their respective internal types.
       * @param d Plain object
       * @returns MsgSuperfluidUndelegateResponse
       */
      public static fromObject(d: {
        [k: string]: any;
      }): osmosis.superfluid.MsgSuperfluidUndelegateResponse;

      /**
       * Creates a plain object from a MsgSuperfluidUndelegateResponse message. Also converts values to other types if specified.
       * @param m MsgSuperfluidUndelegateResponse
       * @param [o] Conversion options
       * @returns Plain object
       */
      public static toObject(
        m: osmosis.superfluid.MsgSuperfluidUndelegateResponse,
        o?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this MsgSuperfluidUndelegateResponse to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a MsgSuperfluidUnbondLock. */
    interface IMsgSuperfluidUnbondLock {
      /** MsgSuperfluidUnbondLock sender */
      sender?: string | null;

      /** MsgSuperfluidUnbondLock lockId */
      lockId?: Long | null;
    }

    /** Represents a MsgSuperfluidUnbondLock. */
    class MsgSuperfluidUnbondLock implements IMsgSuperfluidUnbondLock {
      /**
       * Constructs a new MsgSuperfluidUnbondLock.
       * @param [p] Properties to set
       */
      constructor(p?: osmosis.superfluid.IMsgSuperfluidUnbondLock);

      /** MsgSuperfluidUnbondLock sender. */
      public sender: string;

      /** MsgSuperfluidUnbondLock lockId. */
      public lockId: Long;

      /**
       * Creates a new MsgSuperfluidUnbondLock instance using the specified properties.
       * @param [properties] Properties to set
       * @returns MsgSuperfluidUnbondLock instance
       */
      public static create(
        properties?: osmosis.superfluid.IMsgSuperfluidUnbondLock
      ): osmosis.superfluid.MsgSuperfluidUnbondLock;

      /**
       * Encodes the specified MsgSuperfluidUnbondLock message. Does not implicitly {@link osmosis.superfluid.MsgSuperfluidUnbondLock.verify|verify} messages.
       * @param m MsgSuperfluidUnbondLock message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(
        m: osmosis.superfluid.IMsgSuperfluidUnbondLock,
        w?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a MsgSuperfluidUnbondLock message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns MsgSuperfluidUnbondLock
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        r: $protobuf.Reader | Uint8Array,
        l?: number
      ): osmosis.superfluid.MsgSuperfluidUnbondLock;

      /**
       * Creates a MsgSuperfluidUnbondLock message from a plain object. Also converts values to their respective internal types.
       * @param d Plain object
       * @returns MsgSuperfluidUnbondLock
       */
      public static fromObject(d: {
        [k: string]: any;
      }): osmosis.superfluid.MsgSuperfluidUnbondLock;

      /**
       * Creates a plain object from a MsgSuperfluidUnbondLock message. Also converts values to other types if specified.
       * @param m MsgSuperfluidUnbondLock
       * @param [o] Conversion options
       * @returns Plain object
       */
      public static toObject(
        m: osmosis.superfluid.MsgSuperfluidUnbondLock,
        o?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this MsgSuperfluidUnbondLock to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a MsgSuperfluidUnbondLockResponse. */
    interface IMsgSuperfluidUnbondLockResponse {}

    /** Represents a MsgSuperfluidUnbondLockResponse. */
    class MsgSuperfluidUnbondLockResponse
      implements IMsgSuperfluidUnbondLockResponse
    {
      /**
       * Constructs a new MsgSuperfluidUnbondLockResponse.
       * @param [p] Properties to set
       */
      constructor(p?: osmosis.superfluid.IMsgSuperfluidUnbondLockResponse);

      /**
       * Creates a new MsgSuperfluidUnbondLockResponse instance using the specified properties.
       * @param [properties] Properties to set
       * @returns MsgSuperfluidUnbondLockResponse instance
       */
      public static create(
        properties?: osmosis.superfluid.IMsgSuperfluidUnbondLockResponse
      ): osmosis.superfluid.MsgSuperfluidUnbondLockResponse;

      /**
       * Encodes the specified MsgSuperfluidUnbondLockResponse message. Does not implicitly {@link osmosis.superfluid.MsgSuperfluidUnbondLockResponse.verify|verify} messages.
       * @param m MsgSuperfluidUnbondLockResponse message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(
        m: osmosis.superfluid.IMsgSuperfluidUnbondLockResponse,
        w?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a MsgSuperfluidUnbondLockResponse message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns MsgSuperfluidUnbondLockResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        r: $protobuf.Reader | Uint8Array,
        l?: number
      ): osmosis.superfluid.MsgSuperfluidUnbondLockResponse;

      /**
       * Creates a MsgSuperfluidUnbondLockResponse message from a plain object. Also converts values to their respective internal types.
       * @param d Plain object
       * @returns MsgSuperfluidUnbondLockResponse
       */
      public static fromObject(d: {
        [k: string]: any;
      }): osmosis.superfluid.MsgSuperfluidUnbondLockResponse;

      /**
       * Creates a plain object from a MsgSuperfluidUnbondLockResponse message. Also converts values to other types if specified.
       * @param m MsgSuperfluidUnbondLockResponse
       * @param [o] Conversion options
       * @returns Plain object
       */
      public static toObject(
        m: osmosis.superfluid.MsgSuperfluidUnbondLockResponse,
        o?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this MsgSuperfluidUnbondLockResponse to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a MsgSuperfluidUndelegateAndUnbondLock. */
    interface IMsgSuperfluidUndelegateAndUnbondLock {
      /** MsgSuperfluidUndelegateAndUnbondLock sender */
      sender?: string | null;

      /** MsgSuperfluidUndelegateAndUnbondLock lockId */
      lockId?: Long | null;

      /** MsgSuperfluidUndelegateAndUnbondLock coin */
      coin?: cosmos.base.v1beta1.ICoin | null;
    }

    /** Represents a MsgSuperfluidUndelegateAndUnbondLock. */
    class MsgSuperfluidUndelegateAndUnbondLock
      implements IMsgSuperfluidUndelegateAndUnbondLock
    {
      /**
       * Constructs a new MsgSuperfluidUndelegateAndUnbondLock.
       * @param [p] Properties to set
       */
      constructor(p?: osmosis.superfluid.IMsgSuperfluidUndelegateAndUnbondLock);

      /** MsgSuperfluidUndelegateAndUnbondLock sender. */
      public sender: string;

      /** MsgSuperfluidUndelegateAndUnbondLock lockId. */
      public lockId: Long;

      /** MsgSuperfluidUndelegateAndUnbondLock coin. */
      public coin?: cosmos.base.v1beta1.ICoin | null;

      /**
       * Creates a new MsgSuperfluidUndelegateAndUnbondLock instance using the specified properties.
       * @param [properties] Properties to set
       * @returns MsgSuperfluidUndelegateAndUnbondLock instance
       */
      public static create(
        properties?: osmosis.superfluid.IMsgSuperfluidUndelegateAndUnbondLock
      ): osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock;

      /**
       * Encodes the specified MsgSuperfluidUndelegateAndUnbondLock message. Does not implicitly {@link osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock.verify|verify} messages.
       * @param m MsgSuperfluidUndelegateAndUnbondLock message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(
        m: osmosis.superfluid.IMsgSuperfluidUndelegateAndUnbondLock,
        w?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a MsgSuperfluidUndelegateAndUnbondLock message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns MsgSuperfluidUndelegateAndUnbondLock
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        r: $protobuf.Reader | Uint8Array,
        l?: number
      ): osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock;

      /**
       * Creates a MsgSuperfluidUndelegateAndUnbondLock message from a plain object. Also converts values to their respective internal types.
       * @param d Plain object
       * @returns MsgSuperfluidUndelegateAndUnbondLock
       */
      public static fromObject(d: {
        [k: string]: any;
      }): osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock;

      /**
       * Creates a plain object from a MsgSuperfluidUndelegateAndUnbondLock message. Also converts values to other types if specified.
       * @param m MsgSuperfluidUndelegateAndUnbondLock
       * @param [o] Conversion options
       * @returns Plain object
       */
      public static toObject(
        m: osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock,
        o?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this MsgSuperfluidUndelegateAndUnbondLock to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a MsgSuperfluidUndelegateAndUnbondLockResponse. */
    interface IMsgSuperfluidUndelegateAndUnbondLockResponse {
      /** MsgSuperfluidUndelegateAndUnbondLockResponse lockId */
      lockId?: Long | null;
    }

    /** Represents a MsgSuperfluidUndelegateAndUnbondLockResponse. */
    class MsgSuperfluidUndelegateAndUnbondLockResponse
      implements IMsgSuperfluidUndelegateAndUnbondLockResponse
    {
      /**
       * Constructs a new MsgSuperfluidUndelegateAndUnbondLockResponse.
       * @param [p] Properties to set
       */
      constructor(
        p?: osmosis.superfluid.IMsgSuperfluidUndelegateAndUnbondLockResponse
      );

      /** MsgSuperfluidUndelegateAndUnbondLockResponse lockId. */
      public lockId: Long;

      /**
       * Creates a new MsgSuperfluidUndelegateAndUnbondLockResponse instance using the specified properties.
       * @param [properties] Properties to set
       * @returns MsgSuperfluidUndelegateAndUnbondLockResponse instance
       */
      public static create(
        properties?: osmosis.superfluid.IMsgSuperfluidUndelegateAndUnbondLockResponse
      ): osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLockResponse;

      /**
       * Encodes the specified MsgSuperfluidUndelegateAndUnbondLockResponse message. Does not implicitly {@link osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLockResponse.verify|verify} messages.
       * @param m MsgSuperfluidUndelegateAndUnbondLockResponse message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(
        m: osmosis.superfluid.IMsgSuperfluidUndelegateAndUnbondLockResponse,
        w?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a MsgSuperfluidUndelegateAndUnbondLockResponse message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns MsgSuperfluidUndelegateAndUnbondLockResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        r: $protobuf.Reader | Uint8Array,
        l?: number
      ): osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLockResponse;

      /**
       * Creates a MsgSuperfluidUndelegateAndUnbondLockResponse message from a plain object. Also converts values to their respective internal types.
       * @param d Plain object
       * @returns MsgSuperfluidUndelegateAndUnbondLockResponse
       */
      public static fromObject(d: {
        [k: string]: any;
      }): osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLockResponse;

      /**
       * Creates a plain object from a MsgSuperfluidUndelegateAndUnbondLockResponse message. Also converts values to other types if specified.
       * @param m MsgSuperfluidUndelegateAndUnbondLockResponse
       * @param [o] Conversion options
       * @returns Plain object
       */
      public static toObject(
        m: osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLockResponse,
        o?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this MsgSuperfluidUndelegateAndUnbondLockResponse to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a MsgLockAndSuperfluidDelegate. */
    interface IMsgLockAndSuperfluidDelegate {
      /** MsgLockAndSuperfluidDelegate sender */
      sender?: string | null;

      /** MsgLockAndSuperfluidDelegate coins */
      coins?: cosmos.base.v1beta1.ICoin[] | null;

      /** MsgLockAndSuperfluidDelegate valAddr */
      valAddr?: string | null;
    }

    /** Represents a MsgLockAndSuperfluidDelegate. */
    class MsgLockAndSuperfluidDelegate
      implements IMsgLockAndSuperfluidDelegate
    {
      /**
       * Constructs a new MsgLockAndSuperfluidDelegate.
       * @param [p] Properties to set
       */
      constructor(p?: osmosis.superfluid.IMsgLockAndSuperfluidDelegate);

      /** MsgLockAndSuperfluidDelegate sender. */
      public sender: string;

      /** MsgLockAndSuperfluidDelegate coins. */
      public coins: cosmos.base.v1beta1.ICoin[];

      /** MsgLockAndSuperfluidDelegate valAddr. */
      public valAddr: string;

      /**
       * Creates a new MsgLockAndSuperfluidDelegate instance using the specified properties.
       * @param [properties] Properties to set
       * @returns MsgLockAndSuperfluidDelegate instance
       */
      public static create(
        properties?: osmosis.superfluid.IMsgLockAndSuperfluidDelegate
      ): osmosis.superfluid.MsgLockAndSuperfluidDelegate;

      /**
       * Encodes the specified MsgLockAndSuperfluidDelegate message. Does not implicitly {@link osmosis.superfluid.MsgLockAndSuperfluidDelegate.verify|verify} messages.
       * @param m MsgLockAndSuperfluidDelegate message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(
        m: osmosis.superfluid.IMsgLockAndSuperfluidDelegate,
        w?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a MsgLockAndSuperfluidDelegate message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns MsgLockAndSuperfluidDelegate
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        r: $protobuf.Reader | Uint8Array,
        l?: number
      ): osmosis.superfluid.MsgLockAndSuperfluidDelegate;

      /**
       * Creates a MsgLockAndSuperfluidDelegate message from a plain object. Also converts values to their respective internal types.
       * @param d Plain object
       * @returns MsgLockAndSuperfluidDelegate
       */
      public static fromObject(d: {
        [k: string]: any;
      }): osmosis.superfluid.MsgLockAndSuperfluidDelegate;

      /**
       * Creates a plain object from a MsgLockAndSuperfluidDelegate message. Also converts values to other types if specified.
       * @param m MsgLockAndSuperfluidDelegate
       * @param [o] Conversion options
       * @returns Plain object
       */
      public static toObject(
        m: osmosis.superfluid.MsgLockAndSuperfluidDelegate,
        o?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this MsgLockAndSuperfluidDelegate to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a MsgLockAndSuperfluidDelegateResponse. */
    interface IMsgLockAndSuperfluidDelegateResponse {
      /** MsgLockAndSuperfluidDelegateResponse ID */
      ID?: Long | null;
    }

    /** Represents a MsgLockAndSuperfluidDelegateResponse. */
    class MsgLockAndSuperfluidDelegateResponse
      implements IMsgLockAndSuperfluidDelegateResponse
    {
      /**
       * Constructs a new MsgLockAndSuperfluidDelegateResponse.
       * @param [p] Properties to set
       */
      constructor(p?: osmosis.superfluid.IMsgLockAndSuperfluidDelegateResponse);

      /** MsgLockAndSuperfluidDelegateResponse ID. */
      public ID: Long;

      /**
       * Creates a new MsgLockAndSuperfluidDelegateResponse instance using the specified properties.
       * @param [properties] Properties to set
       * @returns MsgLockAndSuperfluidDelegateResponse instance
       */
      public static create(
        properties?: osmosis.superfluid.IMsgLockAndSuperfluidDelegateResponse
      ): osmosis.superfluid.MsgLockAndSuperfluidDelegateResponse;

      /**
       * Encodes the specified MsgLockAndSuperfluidDelegateResponse message. Does not implicitly {@link osmosis.superfluid.MsgLockAndSuperfluidDelegateResponse.verify|verify} messages.
       * @param m MsgLockAndSuperfluidDelegateResponse message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(
        m: osmosis.superfluid.IMsgLockAndSuperfluidDelegateResponse,
        w?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a MsgLockAndSuperfluidDelegateResponse message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns MsgLockAndSuperfluidDelegateResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        r: $protobuf.Reader | Uint8Array,
        l?: number
      ): osmosis.superfluid.MsgLockAndSuperfluidDelegateResponse;

      /**
       * Creates a MsgLockAndSuperfluidDelegateResponse message from a plain object. Also converts values to their respective internal types.
       * @param d Plain object
       * @returns MsgLockAndSuperfluidDelegateResponse
       */
      public static fromObject(d: {
        [k: string]: any;
      }): osmosis.superfluid.MsgLockAndSuperfluidDelegateResponse;

      /**
       * Creates a plain object from a MsgLockAndSuperfluidDelegateResponse message. Also converts values to other types if specified.
       * @param m MsgLockAndSuperfluidDelegateResponse
       * @param [o] Conversion options
       * @returns Plain object
       */
      public static toObject(
        m: osmosis.superfluid.MsgLockAndSuperfluidDelegateResponse,
        o?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this MsgLockAndSuperfluidDelegateResponse to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a MsgCreateFullRangePositionAndSuperfluidDelegate. */
    interface IMsgCreateFullRangePositionAndSuperfluidDelegate {
      /** MsgCreateFullRangePositionAndSuperfluidDelegate sender */
      sender?: string | null;

      /** MsgCreateFullRangePositionAndSuperfluidDelegate coins */
      coins?: cosmos.base.v1beta1.ICoin[] | null;

      /** MsgCreateFullRangePositionAndSuperfluidDelegate valAddr */
      valAddr?: string | null;

      /** MsgCreateFullRangePositionAndSuperfluidDelegate poolId */
      poolId?: Long | null;
    }

    /** Represents a MsgCreateFullRangePositionAndSuperfluidDelegate. */
    class MsgCreateFullRangePositionAndSuperfluidDelegate
      implements IMsgCreateFullRangePositionAndSuperfluidDelegate
    {
      /**
       * Constructs a new MsgCreateFullRangePositionAndSuperfluidDelegate.
       * @param [p] Properties to set
       */
      constructor(
        p?: osmosis.superfluid.IMsgCreateFullRangePositionAndSuperfluidDelegate
      );

      /** MsgCreateFullRangePositionAndSuperfluidDelegate sender. */
      public sender: string;

      /** MsgCreateFullRangePositionAndSuperfluidDelegate coins. */
      public coins: cosmos.base.v1beta1.ICoin[];

      /** MsgCreateFullRangePositionAndSuperfluidDelegate valAddr. */
      public valAddr: string;

      /** MsgCreateFullRangePositionAndSuperfluidDelegate poolId. */
      public poolId: Long;

      /**
       * Creates a new MsgCreateFullRangePositionAndSuperfluidDelegate instance using the specified properties.
       * @param [properties] Properties to set
       * @returns MsgCreateFullRangePositionAndSuperfluidDelegate instance
       */
      public static create(
        properties?: osmosis.superfluid.IMsgCreateFullRangePositionAndSuperfluidDelegate
      ): osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegate;

      /**
       * Encodes the specified MsgCreateFullRangePositionAndSuperfluidDelegate message. Does not implicitly {@link osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegate.verify|verify} messages.
       * @param m MsgCreateFullRangePositionAndSuperfluidDelegate message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(
        m: osmosis.superfluid.IMsgCreateFullRangePositionAndSuperfluidDelegate,
        w?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a MsgCreateFullRangePositionAndSuperfluidDelegate message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns MsgCreateFullRangePositionAndSuperfluidDelegate
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        r: $protobuf.Reader | Uint8Array,
        l?: number
      ): osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegate;

      /**
       * Creates a MsgCreateFullRangePositionAndSuperfluidDelegate message from a plain object. Also converts values to their respective internal types.
       * @param d Plain object
       * @returns MsgCreateFullRangePositionAndSuperfluidDelegate
       */
      public static fromObject(d: {
        [k: string]: any;
      }): osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegate;

      /**
       * Creates a plain object from a MsgCreateFullRangePositionAndSuperfluidDelegate message. Also converts values to other types if specified.
       * @param m MsgCreateFullRangePositionAndSuperfluidDelegate
       * @param [o] Conversion options
       * @returns Plain object
       */
      public static toObject(
        m: osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegate,
        o?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this MsgCreateFullRangePositionAndSuperfluidDelegate to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a MsgCreateFullRangePositionAndSuperfluidDelegateResponse. */
    interface IMsgCreateFullRangePositionAndSuperfluidDelegateResponse {
      /** MsgCreateFullRangePositionAndSuperfluidDelegateResponse lockID */
      lockID?: Long | null;

      /** MsgCreateFullRangePositionAndSuperfluidDelegateResponse positionID */
      positionID?: Long | null;
    }

    /** Represents a MsgCreateFullRangePositionAndSuperfluidDelegateResponse. */
    class MsgCreateFullRangePositionAndSuperfluidDelegateResponse
      implements IMsgCreateFullRangePositionAndSuperfluidDelegateResponse
    {
      /**
       * Constructs a new MsgCreateFullRangePositionAndSuperfluidDelegateResponse.
       * @param [p] Properties to set
       */
      constructor(
        p?: osmosis.superfluid.IMsgCreateFullRangePositionAndSuperfluidDelegateResponse
      );

      /** MsgCreateFullRangePositionAndSuperfluidDelegateResponse lockID. */
      public lockID: Long;

      /** MsgCreateFullRangePositionAndSuperfluidDelegateResponse positionID. */
      public positionID: Long;

      /**
       * Creates a new MsgCreateFullRangePositionAndSuperfluidDelegateResponse instance using the specified properties.
       * @param [properties] Properties to set
       * @returns MsgCreateFullRangePositionAndSuperfluidDelegateResponse instance
       */
      public static create(
        properties?: osmosis.superfluid.IMsgCreateFullRangePositionAndSuperfluidDelegateResponse
      ): osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegateResponse;

      /**
       * Encodes the specified MsgCreateFullRangePositionAndSuperfluidDelegateResponse message. Does not implicitly {@link osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegateResponse.verify|verify} messages.
       * @param m MsgCreateFullRangePositionAndSuperfluidDelegateResponse message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(
        m: osmosis.superfluid.IMsgCreateFullRangePositionAndSuperfluidDelegateResponse,
        w?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a MsgCreateFullRangePositionAndSuperfluidDelegateResponse message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns MsgCreateFullRangePositionAndSuperfluidDelegateResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        r: $protobuf.Reader | Uint8Array,
        l?: number
      ): osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegateResponse;

      /**
       * Creates a MsgCreateFullRangePositionAndSuperfluidDelegateResponse message from a plain object. Also converts values to their respective internal types.
       * @param d Plain object
       * @returns MsgCreateFullRangePositionAndSuperfluidDelegateResponse
       */
      public static fromObject(d: {
        [k: string]: any;
      }): osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegateResponse;

      /**
       * Creates a plain object from a MsgCreateFullRangePositionAndSuperfluidDelegateResponse message. Also converts values to other types if specified.
       * @param m MsgCreateFullRangePositionAndSuperfluidDelegateResponse
       * @param [o] Conversion options
       * @returns Plain object
       */
      public static toObject(
        m: osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegateResponse,
        o?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this MsgCreateFullRangePositionAndSuperfluidDelegateResponse to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a MsgUnPoolWhitelistedPool. */
    interface IMsgUnPoolWhitelistedPool {
      /** MsgUnPoolWhitelistedPool sender */
      sender?: string | null;

      /** MsgUnPoolWhitelistedPool poolId */
      poolId?: Long | null;
    }

    /** Represents a MsgUnPoolWhitelistedPool. */
    class MsgUnPoolWhitelistedPool implements IMsgUnPoolWhitelistedPool {
      /**
       * Constructs a new MsgUnPoolWhitelistedPool.
       * @param [p] Properties to set
       */
      constructor(p?: osmosis.superfluid.IMsgUnPoolWhitelistedPool);

      /** MsgUnPoolWhitelistedPool sender. */
      public sender: string;

      /** MsgUnPoolWhitelistedPool poolId. */
      public poolId: Long;

      /**
       * Creates a new MsgUnPoolWhitelistedPool instance using the specified properties.
       * @param [properties] Properties to set
       * @returns MsgUnPoolWhitelistedPool instance
       */
      public static create(
        properties?: osmosis.superfluid.IMsgUnPoolWhitelistedPool
      ): osmosis.superfluid.MsgUnPoolWhitelistedPool;

      /**
       * Encodes the specified MsgUnPoolWhitelistedPool message. Does not implicitly {@link osmosis.superfluid.MsgUnPoolWhitelistedPool.verify|verify} messages.
       * @param m MsgUnPoolWhitelistedPool message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(
        m: osmosis.superfluid.IMsgUnPoolWhitelistedPool,
        w?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a MsgUnPoolWhitelistedPool message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns MsgUnPoolWhitelistedPool
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        r: $protobuf.Reader | Uint8Array,
        l?: number
      ): osmosis.superfluid.MsgUnPoolWhitelistedPool;

      /**
       * Creates a MsgUnPoolWhitelistedPool message from a plain object. Also converts values to their respective internal types.
       * @param d Plain object
       * @returns MsgUnPoolWhitelistedPool
       */
      public static fromObject(d: {
        [k: string]: any;
      }): osmosis.superfluid.MsgUnPoolWhitelistedPool;

      /**
       * Creates a plain object from a MsgUnPoolWhitelistedPool message. Also converts values to other types if specified.
       * @param m MsgUnPoolWhitelistedPool
       * @param [o] Conversion options
       * @returns Plain object
       */
      public static toObject(
        m: osmosis.superfluid.MsgUnPoolWhitelistedPool,
        o?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this MsgUnPoolWhitelistedPool to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a MsgUnPoolWhitelistedPoolResponse. */
    interface IMsgUnPoolWhitelistedPoolResponse {
      /** MsgUnPoolWhitelistedPoolResponse exitedLockIds */
      exitedLockIds?: Long[] | null;
    }

    /** Represents a MsgUnPoolWhitelistedPoolResponse. */
    class MsgUnPoolWhitelistedPoolResponse
      implements IMsgUnPoolWhitelistedPoolResponse
    {
      /**
       * Constructs a new MsgUnPoolWhitelistedPoolResponse.
       * @param [p] Properties to set
       */
      constructor(p?: osmosis.superfluid.IMsgUnPoolWhitelistedPoolResponse);

      /** MsgUnPoolWhitelistedPoolResponse exitedLockIds. */
      public exitedLockIds: Long[];

      /**
       * Creates a new MsgUnPoolWhitelistedPoolResponse instance using the specified properties.
       * @param [properties] Properties to set
       * @returns MsgUnPoolWhitelistedPoolResponse instance
       */
      public static create(
        properties?: osmosis.superfluid.IMsgUnPoolWhitelistedPoolResponse
      ): osmosis.superfluid.MsgUnPoolWhitelistedPoolResponse;

      /**
       * Encodes the specified MsgUnPoolWhitelistedPoolResponse message. Does not implicitly {@link osmosis.superfluid.MsgUnPoolWhitelistedPoolResponse.verify|verify} messages.
       * @param m MsgUnPoolWhitelistedPoolResponse message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(
        m: osmosis.superfluid.IMsgUnPoolWhitelistedPoolResponse,
        w?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a MsgUnPoolWhitelistedPoolResponse message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns MsgUnPoolWhitelistedPoolResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        r: $protobuf.Reader | Uint8Array,
        l?: number
      ): osmosis.superfluid.MsgUnPoolWhitelistedPoolResponse;

      /**
       * Creates a MsgUnPoolWhitelistedPoolResponse message from a plain object. Also converts values to their respective internal types.
       * @param d Plain object
       * @returns MsgUnPoolWhitelistedPoolResponse
       */
      public static fromObject(d: {
        [k: string]: any;
      }): osmosis.superfluid.MsgUnPoolWhitelistedPoolResponse;

      /**
       * Creates a plain object from a MsgUnPoolWhitelistedPoolResponse message. Also converts values to other types if specified.
       * @param m MsgUnPoolWhitelistedPoolResponse
       * @param [o] Conversion options
       * @returns Plain object
       */
      public static toObject(
        m: osmosis.superfluid.MsgUnPoolWhitelistedPoolResponse,
        o?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this MsgUnPoolWhitelistedPoolResponse to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition. */
    interface IMsgUnlockAndMigrateSharesToFullRangeConcentratedPosition {
      /** MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition sender */
      sender?: string | null;

      /** MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition lockId */
      lockId?: Long | null;

      /** MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition sharesToMigrate */
      sharesToMigrate?: cosmos.base.v1beta1.ICoin | null;

      /** MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition tokenOutMins */
      tokenOutMins?: cosmos.base.v1beta1.ICoin[] | null;
    }

    /** Represents a MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition. */
    class MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition
      implements IMsgUnlockAndMigrateSharesToFullRangeConcentratedPosition
    {
      /**
       * Constructs a new MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.
       * @param [p] Properties to set
       */
      constructor(
        p?: osmosis.superfluid.IMsgUnlockAndMigrateSharesToFullRangeConcentratedPosition
      );

      /** MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition sender. */
      public sender: string;

      /** MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition lockId. */
      public lockId: Long;

      /** MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition sharesToMigrate. */
      public sharesToMigrate?: cosmos.base.v1beta1.ICoin | null;

      /** MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition tokenOutMins. */
      public tokenOutMins: cosmos.base.v1beta1.ICoin[];

      /**
       * Creates a new MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition instance using the specified properties.
       * @param [properties] Properties to set
       * @returns MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition instance
       */
      public static create(
        properties?: osmosis.superfluid.IMsgUnlockAndMigrateSharesToFullRangeConcentratedPosition
      ): osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;

      /**
       * Encodes the specified MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition message. Does not implicitly {@link osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.verify|verify} messages.
       * @param m MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(
        m: osmosis.superfluid.IMsgUnlockAndMigrateSharesToFullRangeConcentratedPosition,
        w?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        r: $protobuf.Reader | Uint8Array,
        l?: number
      ): osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;

      /**
       * Creates a MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition message from a plain object. Also converts values to their respective internal types.
       * @param d Plain object
       * @returns MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition
       */
      public static fromObject(d: {
        [k: string]: any;
      }): osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;

      /**
       * Creates a plain object from a MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition message. Also converts values to other types if specified.
       * @param m MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition
       * @param [o] Conversion options
       * @returns Plain object
       */
      public static toObject(
        m: osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition,
        o?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse. */
    interface IMsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse {
      /** MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse amount0 */
      amount0?: string | null;

      /** MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse amount1 */
      amount1?: string | null;

      /** MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse liquidityCreated */
      liquidityCreated?: string | null;

      /** MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse joinTime */
      joinTime?: google.protobuf.ITimestamp | null;
    }

    /** Represents a MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse. */
    class MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse
      implements
        IMsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse
    {
      /**
       * Constructs a new MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse.
       * @param [p] Properties to set
       */
      constructor(
        p?: osmosis.superfluid.IMsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse
      );

      /** MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse amount0. */
      public amount0: string;

      /** MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse amount1. */
      public amount1: string;

      /** MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse liquidityCreated. */
      public liquidityCreated: string;

      /** MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse joinTime. */
      public joinTime?: google.protobuf.ITimestamp | null;

      /**
       * Creates a new MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse instance using the specified properties.
       * @param [properties] Properties to set
       * @returns MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse instance
       */
      public static create(
        properties?: osmosis.superfluid.IMsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse
      ): osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse;

      /**
       * Encodes the specified MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse message. Does not implicitly {@link osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse.verify|verify} messages.
       * @param m MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(
        m: osmosis.superfluid.IMsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse,
        w?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        r: $protobuf.Reader | Uint8Array,
        l?: number
      ): osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse;

      /**
       * Creates a MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse message from a plain object. Also converts values to their respective internal types.
       * @param d Plain object
       * @returns MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse
       */
      public static fromObject(d: {
        [k: string]: any;
      }): osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse;

      /**
       * Creates a plain object from a MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse message. Also converts values to other types if specified.
       * @param m MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse
       * @param [o] Conversion options
       * @returns Plain object
       */
      public static toObject(
        m: osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse,
        o?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a MsgAddToConcentratedLiquiditySuperfluidPosition. */
    interface IMsgAddToConcentratedLiquiditySuperfluidPosition {
      /** MsgAddToConcentratedLiquiditySuperfluidPosition positionId */
      positionId?: Long | null;

      /** MsgAddToConcentratedLiquiditySuperfluidPosition sender */
      sender?: string | null;

      /** MsgAddToConcentratedLiquiditySuperfluidPosition tokenDesired0 */
      tokenDesired0?: cosmos.base.v1beta1.ICoin | null;

      /** MsgAddToConcentratedLiquiditySuperfluidPosition tokenDesired1 */
      tokenDesired1?: cosmos.base.v1beta1.ICoin | null;
    }

    /** Represents a MsgAddToConcentratedLiquiditySuperfluidPosition. */
    class MsgAddToConcentratedLiquiditySuperfluidPosition
      implements IMsgAddToConcentratedLiquiditySuperfluidPosition
    {
      /**
       * Constructs a new MsgAddToConcentratedLiquiditySuperfluidPosition.
       * @param [p] Properties to set
       */
      constructor(
        p?: osmosis.superfluid.IMsgAddToConcentratedLiquiditySuperfluidPosition
      );

      /** MsgAddToConcentratedLiquiditySuperfluidPosition positionId. */
      public positionId: Long;

      /** MsgAddToConcentratedLiquiditySuperfluidPosition sender. */
      public sender: string;

      /** MsgAddToConcentratedLiquiditySuperfluidPosition tokenDesired0. */
      public tokenDesired0?: cosmos.base.v1beta1.ICoin | null;

      /** MsgAddToConcentratedLiquiditySuperfluidPosition tokenDesired1. */
      public tokenDesired1?: cosmos.base.v1beta1.ICoin | null;

      /**
       * Creates a new MsgAddToConcentratedLiquiditySuperfluidPosition instance using the specified properties.
       * @param [properties] Properties to set
       * @returns MsgAddToConcentratedLiquiditySuperfluidPosition instance
       */
      public static create(
        properties?: osmosis.superfluid.IMsgAddToConcentratedLiquiditySuperfluidPosition
      ): osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPosition;

      /**
       * Encodes the specified MsgAddToConcentratedLiquiditySuperfluidPosition message. Does not implicitly {@link osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPosition.verify|verify} messages.
       * @param m MsgAddToConcentratedLiquiditySuperfluidPosition message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(
        m: osmosis.superfluid.IMsgAddToConcentratedLiquiditySuperfluidPosition,
        w?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a MsgAddToConcentratedLiquiditySuperfluidPosition message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns MsgAddToConcentratedLiquiditySuperfluidPosition
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        r: $protobuf.Reader | Uint8Array,
        l?: number
      ): osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPosition;

      /**
       * Creates a MsgAddToConcentratedLiquiditySuperfluidPosition message from a plain object. Also converts values to their respective internal types.
       * @param d Plain object
       * @returns MsgAddToConcentratedLiquiditySuperfluidPosition
       */
      public static fromObject(d: {
        [k: string]: any;
      }): osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPosition;

      /**
       * Creates a plain object from a MsgAddToConcentratedLiquiditySuperfluidPosition message. Also converts values to other types if specified.
       * @param m MsgAddToConcentratedLiquiditySuperfluidPosition
       * @param [o] Conversion options
       * @returns Plain object
       */
      public static toObject(
        m: osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPosition,
        o?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this MsgAddToConcentratedLiquiditySuperfluidPosition to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a MsgAddToConcentratedLiquiditySuperfluidPositionResponse. */
    interface IMsgAddToConcentratedLiquiditySuperfluidPositionResponse {
      /** MsgAddToConcentratedLiquiditySuperfluidPositionResponse positionId */
      positionId?: Long | null;

      /** MsgAddToConcentratedLiquiditySuperfluidPositionResponse amount0 */
      amount0?: string | null;

      /** MsgAddToConcentratedLiquiditySuperfluidPositionResponse amount1 */
      amount1?: string | null;

      /** MsgAddToConcentratedLiquiditySuperfluidPositionResponse newLiquidity */
      newLiquidity?: string | null;

      /** MsgAddToConcentratedLiquiditySuperfluidPositionResponse lockId */
      lockId?: Long | null;
    }

    /** Represents a MsgAddToConcentratedLiquiditySuperfluidPositionResponse. */
    class MsgAddToConcentratedLiquiditySuperfluidPositionResponse
      implements IMsgAddToConcentratedLiquiditySuperfluidPositionResponse
    {
      /**
       * Constructs a new MsgAddToConcentratedLiquiditySuperfluidPositionResponse.
       * @param [p] Properties to set
       */
      constructor(
        p?: osmosis.superfluid.IMsgAddToConcentratedLiquiditySuperfluidPositionResponse
      );

      /** MsgAddToConcentratedLiquiditySuperfluidPositionResponse positionId. */
      public positionId: Long;

      /** MsgAddToConcentratedLiquiditySuperfluidPositionResponse amount0. */
      public amount0: string;

      /** MsgAddToConcentratedLiquiditySuperfluidPositionResponse amount1. */
      public amount1: string;

      /** MsgAddToConcentratedLiquiditySuperfluidPositionResponse newLiquidity. */
      public newLiquidity: string;

      /** MsgAddToConcentratedLiquiditySuperfluidPositionResponse lockId. */
      public lockId: Long;

      /**
       * Creates a new MsgAddToConcentratedLiquiditySuperfluidPositionResponse instance using the specified properties.
       * @param [properties] Properties to set
       * @returns MsgAddToConcentratedLiquiditySuperfluidPositionResponse instance
       */
      public static create(
        properties?: osmosis.superfluid.IMsgAddToConcentratedLiquiditySuperfluidPositionResponse
      ): osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPositionResponse;

      /**
       * Encodes the specified MsgAddToConcentratedLiquiditySuperfluidPositionResponse message. Does not implicitly {@link osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPositionResponse.verify|verify} messages.
       * @param m MsgAddToConcentratedLiquiditySuperfluidPositionResponse message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(
        m: osmosis.superfluid.IMsgAddToConcentratedLiquiditySuperfluidPositionResponse,
        w?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a MsgAddToConcentratedLiquiditySuperfluidPositionResponse message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns MsgAddToConcentratedLiquiditySuperfluidPositionResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        r: $protobuf.Reader | Uint8Array,
        l?: number
      ): osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPositionResponse;

      /**
       * Creates a MsgAddToConcentratedLiquiditySuperfluidPositionResponse message from a plain object. Also converts values to their respective internal types.
       * @param d Plain object
       * @returns MsgAddToConcentratedLiquiditySuperfluidPositionResponse
       */
      public static fromObject(d: {
        [k: string]: any;
      }): osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPositionResponse;

      /**
       * Creates a plain object from a MsgAddToConcentratedLiquiditySuperfluidPositionResponse message. Also converts values to other types if specified.
       * @param m MsgAddToConcentratedLiquiditySuperfluidPositionResponse
       * @param [o] Conversion options
       * @returns Plain object
       */
      public static toObject(
        m: osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPositionResponse,
        o?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this MsgAddToConcentratedLiquiditySuperfluidPositionResponse to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }
  }

  /** Namespace gamm. */
  namespace gamm {
    /** Namespace v1beta1. */
    namespace v1beta1 {
      /** Properties of a Params. */
      interface IParams {
        /** Params poolCreationFee */
        poolCreationFee?: cosmos.base.v1beta1.ICoin[] | null;
      }

      /** Represents a Params. */
      class Params implements IParams {
        /**
         * Constructs a new Params.
         * @param [p] Properties to set
         */
        constructor(p?: osmosis.gamm.v1beta1.IParams);

        /** Params poolCreationFee. */
        public poolCreationFee: cosmos.base.v1beta1.ICoin[];

        /**
         * Creates a new Params instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Params instance
         */
        public static create(
          properties?: osmosis.gamm.v1beta1.IParams
        ): osmosis.gamm.v1beta1.Params;

        /**
         * Encodes the specified Params message. Does not implicitly {@link osmosis.gamm.v1beta1.Params.verify|verify} messages.
         * @param m Params message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: osmosis.gamm.v1beta1.IParams,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a Params message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Params
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): osmosis.gamm.v1beta1.Params;

        /**
         * Creates a Params message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns Params
         */
        public static fromObject(d: {
          [k: string]: any;
        }): osmosis.gamm.v1beta1.Params;

        /**
         * Creates a plain object from a Params message. Also converts values to other types if specified.
         * @param m Params
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: osmosis.gamm.v1beta1.Params,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this Params to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a GenesisState. */
      interface IGenesisState {
        /** GenesisState pools */
        pools?: google.protobuf.IAny[] | null;

        /** GenesisState nextPoolNumber */
        nextPoolNumber?: Long | null;

        /** GenesisState params */
        params?: osmosis.gamm.v1beta1.IParams | null;

        /** GenesisState migrationRecords */
        migrationRecords?: osmosis.gamm.v1beta1.IMigrationRecords | null;
      }

      /** Represents a GenesisState. */
      class GenesisState implements IGenesisState {
        /**
         * Constructs a new GenesisState.
         * @param [p] Properties to set
         */
        constructor(p?: osmosis.gamm.v1beta1.IGenesisState);

        /** GenesisState pools. */
        public pools: google.protobuf.IAny[];

        /** GenesisState nextPoolNumber. */
        public nextPoolNumber: Long;

        /** GenesisState params. */
        public params?: osmosis.gamm.v1beta1.IParams | null;

        /** GenesisState migrationRecords. */
        public migrationRecords?: osmosis.gamm.v1beta1.IMigrationRecords | null;

        /**
         * Creates a new GenesisState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GenesisState instance
         */
        public static create(
          properties?: osmosis.gamm.v1beta1.IGenesisState
        ): osmosis.gamm.v1beta1.GenesisState;

        /**
         * Encodes the specified GenesisState message. Does not implicitly {@link osmosis.gamm.v1beta1.GenesisState.verify|verify} messages.
         * @param m GenesisState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: osmosis.gamm.v1beta1.IGenesisState,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a GenesisState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GenesisState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): osmosis.gamm.v1beta1.GenesisState;

        /**
         * Creates a GenesisState message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns GenesisState
         */
        public static fromObject(d: {
          [k: string]: any;
        }): osmosis.gamm.v1beta1.GenesisState;

        /**
         * Creates a plain object from a GenesisState message. Also converts values to other types if specified.
         * @param m GenesisState
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: osmosis.gamm.v1beta1.GenesisState,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this GenesisState to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a MigrationRecords. */
      interface IMigrationRecords {
        /** MigrationRecords balancerToConcentratedPoolLinks */
        balancerToConcentratedPoolLinks?:
          | osmosis.gamm.v1beta1.IBalancerToConcentratedPoolLink[]
          | null;
      }

      /** Represents a MigrationRecords. */
      class MigrationRecords implements IMigrationRecords {
        /**
         * Constructs a new MigrationRecords.
         * @param [p] Properties to set
         */
        constructor(p?: osmosis.gamm.v1beta1.IMigrationRecords);

        /** MigrationRecords balancerToConcentratedPoolLinks. */
        public balancerToConcentratedPoolLinks: osmosis.gamm.v1beta1.IBalancerToConcentratedPoolLink[];

        /**
         * Creates a new MigrationRecords instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MigrationRecords instance
         */
        public static create(
          properties?: osmosis.gamm.v1beta1.IMigrationRecords
        ): osmosis.gamm.v1beta1.MigrationRecords;

        /**
         * Encodes the specified MigrationRecords message. Does not implicitly {@link osmosis.gamm.v1beta1.MigrationRecords.verify|verify} messages.
         * @param m MigrationRecords message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: osmosis.gamm.v1beta1.IMigrationRecords,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a MigrationRecords message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MigrationRecords
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): osmosis.gamm.v1beta1.MigrationRecords;

        /**
         * Creates a MigrationRecords message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns MigrationRecords
         */
        public static fromObject(d: {
          [k: string]: any;
        }): osmosis.gamm.v1beta1.MigrationRecords;

        /**
         * Creates a plain object from a MigrationRecords message. Also converts values to other types if specified.
         * @param m MigrationRecords
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: osmosis.gamm.v1beta1.MigrationRecords,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this MigrationRecords to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a BalancerToConcentratedPoolLink. */
      interface IBalancerToConcentratedPoolLink {
        /** BalancerToConcentratedPoolLink balancerPoolId */
        balancerPoolId?: Long | null;

        /** BalancerToConcentratedPoolLink clPoolId */
        clPoolId?: Long | null;
      }

      /** Represents a BalancerToConcentratedPoolLink. */
      class BalancerToConcentratedPoolLink
        implements IBalancerToConcentratedPoolLink
      {
        /**
         * Constructs a new BalancerToConcentratedPoolLink.
         * @param [p] Properties to set
         */
        constructor(p?: osmosis.gamm.v1beta1.IBalancerToConcentratedPoolLink);

        /** BalancerToConcentratedPoolLink balancerPoolId. */
        public balancerPoolId: Long;

        /** BalancerToConcentratedPoolLink clPoolId. */
        public clPoolId: Long;

        /**
         * Creates a new BalancerToConcentratedPoolLink instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BalancerToConcentratedPoolLink instance
         */
        public static create(
          properties?: osmosis.gamm.v1beta1.IBalancerToConcentratedPoolLink
        ): osmosis.gamm.v1beta1.BalancerToConcentratedPoolLink;

        /**
         * Encodes the specified BalancerToConcentratedPoolLink message. Does not implicitly {@link osmosis.gamm.v1beta1.BalancerToConcentratedPoolLink.verify|verify} messages.
         * @param m BalancerToConcentratedPoolLink message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: osmosis.gamm.v1beta1.IBalancerToConcentratedPoolLink,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a BalancerToConcentratedPoolLink message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns BalancerToConcentratedPoolLink
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): osmosis.gamm.v1beta1.BalancerToConcentratedPoolLink;

        /**
         * Creates a BalancerToConcentratedPoolLink message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns BalancerToConcentratedPoolLink
         */
        public static fromObject(d: {
          [k: string]: any;
        }): osmosis.gamm.v1beta1.BalancerToConcentratedPoolLink;

        /**
         * Creates a plain object from a BalancerToConcentratedPoolLink message. Also converts values to other types if specified.
         * @param m BalancerToConcentratedPoolLink
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: osmosis.gamm.v1beta1.BalancerToConcentratedPoolLink,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this BalancerToConcentratedPoolLink to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a ReplaceMigrationRecordsProposal. */
      interface IReplaceMigrationRecordsProposal {
        /** ReplaceMigrationRecordsProposal title */
        title?: string | null;

        /** ReplaceMigrationRecordsProposal description */
        description?: string | null;

        /** ReplaceMigrationRecordsProposal records */
        records?: osmosis.gamm.v1beta1.IBalancerToConcentratedPoolLink[] | null;
      }

      /** Represents a ReplaceMigrationRecordsProposal. */
      class ReplaceMigrationRecordsProposal
        implements IReplaceMigrationRecordsProposal
      {
        /**
         * Constructs a new ReplaceMigrationRecordsProposal.
         * @param [p] Properties to set
         */
        constructor(p?: osmosis.gamm.v1beta1.IReplaceMigrationRecordsProposal);

        /** ReplaceMigrationRecordsProposal title. */
        public title: string;

        /** ReplaceMigrationRecordsProposal description. */
        public description: string;

        /** ReplaceMigrationRecordsProposal records. */
        public records: osmosis.gamm.v1beta1.IBalancerToConcentratedPoolLink[];

        /**
         * Creates a new ReplaceMigrationRecordsProposal instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReplaceMigrationRecordsProposal instance
         */
        public static create(
          properties?: osmosis.gamm.v1beta1.IReplaceMigrationRecordsProposal
        ): osmosis.gamm.v1beta1.ReplaceMigrationRecordsProposal;

        /**
         * Encodes the specified ReplaceMigrationRecordsProposal message. Does not implicitly {@link osmosis.gamm.v1beta1.ReplaceMigrationRecordsProposal.verify|verify} messages.
         * @param m ReplaceMigrationRecordsProposal message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: osmosis.gamm.v1beta1.IReplaceMigrationRecordsProposal,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a ReplaceMigrationRecordsProposal message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReplaceMigrationRecordsProposal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): osmosis.gamm.v1beta1.ReplaceMigrationRecordsProposal;

        /**
         * Creates a ReplaceMigrationRecordsProposal message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns ReplaceMigrationRecordsProposal
         */
        public static fromObject(d: {
          [k: string]: any;
        }): osmosis.gamm.v1beta1.ReplaceMigrationRecordsProposal;

        /**
         * Creates a plain object from a ReplaceMigrationRecordsProposal message. Also converts values to other types if specified.
         * @param m ReplaceMigrationRecordsProposal
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: osmosis.gamm.v1beta1.ReplaceMigrationRecordsProposal,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this ReplaceMigrationRecordsProposal to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of an UpdateMigrationRecordsProposal. */
      interface IUpdateMigrationRecordsProposal {
        /** UpdateMigrationRecordsProposal title */
        title?: string | null;

        /** UpdateMigrationRecordsProposal description */
        description?: string | null;

        /** UpdateMigrationRecordsProposal records */
        records?: osmosis.gamm.v1beta1.IBalancerToConcentratedPoolLink[] | null;
      }

      /** Represents an UpdateMigrationRecordsProposal. */
      class UpdateMigrationRecordsProposal
        implements IUpdateMigrationRecordsProposal
      {
        /**
         * Constructs a new UpdateMigrationRecordsProposal.
         * @param [p] Properties to set
         */
        constructor(p?: osmosis.gamm.v1beta1.IUpdateMigrationRecordsProposal);

        /** UpdateMigrationRecordsProposal title. */
        public title: string;

        /** UpdateMigrationRecordsProposal description. */
        public description: string;

        /** UpdateMigrationRecordsProposal records. */
        public records: osmosis.gamm.v1beta1.IBalancerToConcentratedPoolLink[];

        /**
         * Creates a new UpdateMigrationRecordsProposal instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateMigrationRecordsProposal instance
         */
        public static create(
          properties?: osmosis.gamm.v1beta1.IUpdateMigrationRecordsProposal
        ): osmosis.gamm.v1beta1.UpdateMigrationRecordsProposal;

        /**
         * Encodes the specified UpdateMigrationRecordsProposal message. Does not implicitly {@link osmosis.gamm.v1beta1.UpdateMigrationRecordsProposal.verify|verify} messages.
         * @param m UpdateMigrationRecordsProposal message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: osmosis.gamm.v1beta1.IUpdateMigrationRecordsProposal,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes an UpdateMigrationRecordsProposal message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UpdateMigrationRecordsProposal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): osmosis.gamm.v1beta1.UpdateMigrationRecordsProposal;

        /**
         * Creates an UpdateMigrationRecordsProposal message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns UpdateMigrationRecordsProposal
         */
        public static fromObject(d: {
          [k: string]: any;
        }): osmosis.gamm.v1beta1.UpdateMigrationRecordsProposal;

        /**
         * Creates a plain object from an UpdateMigrationRecordsProposal message. Also converts values to other types if specified.
         * @param m UpdateMigrationRecordsProposal
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: osmosis.gamm.v1beta1.UpdateMigrationRecordsProposal,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this UpdateMigrationRecordsProposal to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }
    }
  }
}
