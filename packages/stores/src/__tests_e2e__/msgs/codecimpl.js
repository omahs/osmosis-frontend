/* eslint-disable */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.osmosis = exports.google = exports.cosmos = void 0;
var $protobuf = require("protobufjs/minimal");
const $Reader = $protobuf.Reader,
  $Writer = $protobuf.Writer,
  $util = $protobuf.util;
const $root = {};
exports.cosmos = $root.cosmos = (() => {
  const cosmos = {};
  cosmos.base = (function () {
    const base = {};
    base.v1beta1 = (function () {
      const v1beta1 = {};
      v1beta1.Coin = (function () {
        function Coin(p) {
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        Coin.prototype.denom = "";
        Coin.prototype.amount = "";
        Coin.create = function create(properties) {
          return new Coin(properties);
        };
        Coin.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.denom != null && Object.hasOwnProperty.call(m, "denom"))
            w.uint32(10).string(m.denom);
          if (m.amount != null && Object.hasOwnProperty.call(m, "amount"))
            w.uint32(18).string(m.amount);
          return w;
        };
        Coin.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.cosmos.base.v1beta1.Coin();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.denom = r.string();
                break;
              case 2:
                m.amount = r.string();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        Coin.fromObject = function fromObject(d) {
          if (d instanceof $root.cosmos.base.v1beta1.Coin) return d;
          var m = new $root.cosmos.base.v1beta1.Coin();
          if (d.denom != null) {
            m.denom = String(d.denom);
          }
          if (d.amount != null) {
            m.amount = String(d.amount);
          }
          return m;
        };
        Coin.toObject = function toObject(m, o) {
          if (!o) o = {};
          var d = {};
          if (o.defaults) {
            d.denom = "";
            d.amount = "";
          }
          if (m.denom != null && m.hasOwnProperty("denom")) {
            d.denom = m.denom;
          }
          if (m.amount != null && m.hasOwnProperty("amount")) {
            d.amount = m.amount;
          }
          return d;
        };
        Coin.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return Coin;
      })();
      v1beta1.DecCoin = (function () {
        function DecCoin(p) {
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        DecCoin.prototype.denom = "";
        DecCoin.prototype.amount = "";
        DecCoin.create = function create(properties) {
          return new DecCoin(properties);
        };
        DecCoin.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.denom != null && Object.hasOwnProperty.call(m, "denom"))
            w.uint32(10).string(m.denom);
          if (m.amount != null && Object.hasOwnProperty.call(m, "amount"))
            w.uint32(18).string(m.amount);
          return w;
        };
        DecCoin.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.cosmos.base.v1beta1.DecCoin();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.denom = r.string();
                break;
              case 2:
                m.amount = r.string();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        DecCoin.fromObject = function fromObject(d) {
          if (d instanceof $root.cosmos.base.v1beta1.DecCoin) return d;
          var m = new $root.cosmos.base.v1beta1.DecCoin();
          if (d.denom != null) {
            m.denom = String(d.denom);
          }
          if (d.amount != null) {
            m.amount = String(d.amount);
          }
          return m;
        };
        DecCoin.toObject = function toObject(m, o) {
          if (!o) o = {};
          var d = {};
          if (o.defaults) {
            d.denom = "";
            d.amount = "";
          }
          if (m.denom != null && m.hasOwnProperty("denom")) {
            d.denom = m.denom;
          }
          if (m.amount != null && m.hasOwnProperty("amount")) {
            d.amount = m.amount;
          }
          return d;
        };
        DecCoin.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return DecCoin;
      })();
      v1beta1.IntProto = (function () {
        function IntProto(p) {
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        IntProto.prototype.int = "";
        IntProto.create = function create(properties) {
          return new IntProto(properties);
        };
        IntProto.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.int != null && Object.hasOwnProperty.call(m, "int"))
            w.uint32(10).string(m.int);
          return w;
        };
        IntProto.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.cosmos.base.v1beta1.IntProto();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.int = r.string();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        IntProto.fromObject = function fromObject(d) {
          if (d instanceof $root.cosmos.base.v1beta1.IntProto) return d;
          var m = new $root.cosmos.base.v1beta1.IntProto();
          if (d.int != null) {
            m.int = String(d.int);
          }
          return m;
        };
        IntProto.toObject = function toObject(m, o) {
          if (!o) o = {};
          var d = {};
          if (o.defaults) {
            d.int = "";
          }
          if (m.int != null && m.hasOwnProperty("int")) {
            d.int = m.int;
          }
          return d;
        };
        IntProto.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return IntProto;
      })();
      v1beta1.DecProto = (function () {
        function DecProto(p) {
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        DecProto.prototype.dec = "";
        DecProto.create = function create(properties) {
          return new DecProto(properties);
        };
        DecProto.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.dec != null && Object.hasOwnProperty.call(m, "dec"))
            w.uint32(10).string(m.dec);
          return w;
        };
        DecProto.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.cosmos.base.v1beta1.DecProto();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.dec = r.string();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        DecProto.fromObject = function fromObject(d) {
          if (d instanceof $root.cosmos.base.v1beta1.DecProto) return d;
          var m = new $root.cosmos.base.v1beta1.DecProto();
          if (d.dec != null) {
            m.dec = String(d.dec);
          }
          return m;
        };
        DecProto.toObject = function toObject(m, o) {
          if (!o) o = {};
          var d = {};
          if (o.defaults) {
            d.dec = "";
          }
          if (m.dec != null && m.hasOwnProperty("dec")) {
            d.dec = m.dec;
          }
          return d;
        };
        DecProto.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return DecProto;
      })();
      return v1beta1;
    })();
    return base;
  })();
  cosmos.bank = (function () {
    const bank = {};
    bank.v1beta1 = (function () {
      const v1beta1 = {};
      v1beta1.Params = (function () {
        function Params(p) {
          this.sendEnabled = [];
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        Params.prototype.sendEnabled = $util.emptyArray;
        Params.prototype.defaultSendEnabled = false;
        Params.create = function create(properties) {
          return new Params(properties);
        };
        Params.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.sendEnabled != null && m.sendEnabled.length) {
            for (var i = 0; i < m.sendEnabled.length; ++i)
              $root.cosmos.bank.v1beta1.SendEnabled.encode(
                m.sendEnabled[i],
                w.uint32(10).fork()
              ).ldelim();
          }
          if (
            m.defaultSendEnabled != null &&
            Object.hasOwnProperty.call(m, "defaultSendEnabled")
          )
            w.uint32(16).bool(m.defaultSendEnabled);
          return w;
        };
        Params.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.cosmos.bank.v1beta1.Params();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                if (!(m.sendEnabled && m.sendEnabled.length))
                  m.sendEnabled = [];
                m.sendEnabled.push(
                  $root.cosmos.bank.v1beta1.SendEnabled.decode(r, r.uint32())
                );
                break;
              case 2:
                m.defaultSendEnabled = r.bool();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        Params.fromObject = function fromObject(d) {
          if (d instanceof $root.cosmos.bank.v1beta1.Params) return d;
          var m = new $root.cosmos.bank.v1beta1.Params();
          if (d.sendEnabled) {
            if (!Array.isArray(d.sendEnabled))
              throw TypeError(
                ".cosmos.bank.v1beta1.Params.sendEnabled: array expected"
              );
            m.sendEnabled = [];
            for (var i = 0; i < d.sendEnabled.length; ++i) {
              if (typeof d.sendEnabled[i] !== "object")
                throw TypeError(
                  ".cosmos.bank.v1beta1.Params.sendEnabled: object expected"
                );
              m.sendEnabled[i] =
                $root.cosmos.bank.v1beta1.SendEnabled.fromObject(
                  d.sendEnabled[i]
                );
            }
          }
          if (d.defaultSendEnabled != null) {
            m.defaultSendEnabled = Boolean(d.defaultSendEnabled);
          }
          return m;
        };
        Params.toObject = function toObject(m, o) {
          if (!o) o = {};
          var d = {};
          if (o.arrays || o.defaults) {
            d.sendEnabled = [];
          }
          if (o.defaults) {
            d.defaultSendEnabled = false;
          }
          if (m.sendEnabled && m.sendEnabled.length) {
            d.sendEnabled = [];
            for (var j = 0; j < m.sendEnabled.length; ++j) {
              d.sendEnabled[j] = $root.cosmos.bank.v1beta1.SendEnabled.toObject(
                m.sendEnabled[j],
                o
              );
            }
          }
          if (
            m.defaultSendEnabled != null &&
            m.hasOwnProperty("defaultSendEnabled")
          ) {
            d.defaultSendEnabled = m.defaultSendEnabled;
          }
          return d;
        };
        Params.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return Params;
      })();
      v1beta1.SendEnabled = (function () {
        function SendEnabled(p) {
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        SendEnabled.prototype.denom = "";
        SendEnabled.prototype.enabled = false;
        SendEnabled.create = function create(properties) {
          return new SendEnabled(properties);
        };
        SendEnabled.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.denom != null && Object.hasOwnProperty.call(m, "denom"))
            w.uint32(10).string(m.denom);
          if (m.enabled != null && Object.hasOwnProperty.call(m, "enabled"))
            w.uint32(16).bool(m.enabled);
          return w;
        };
        SendEnabled.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.cosmos.bank.v1beta1.SendEnabled();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.denom = r.string();
                break;
              case 2:
                m.enabled = r.bool();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        SendEnabled.fromObject = function fromObject(d) {
          if (d instanceof $root.cosmos.bank.v1beta1.SendEnabled) return d;
          var m = new $root.cosmos.bank.v1beta1.SendEnabled();
          if (d.denom != null) {
            m.denom = String(d.denom);
          }
          if (d.enabled != null) {
            m.enabled = Boolean(d.enabled);
          }
          return m;
        };
        SendEnabled.toObject = function toObject(m, o) {
          if (!o) o = {};
          var d = {};
          if (o.defaults) {
            d.denom = "";
            d.enabled = false;
          }
          if (m.denom != null && m.hasOwnProperty("denom")) {
            d.denom = m.denom;
          }
          if (m.enabled != null && m.hasOwnProperty("enabled")) {
            d.enabled = m.enabled;
          }
          return d;
        };
        SendEnabled.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return SendEnabled;
      })();
      v1beta1.Input = (function () {
        function Input(p) {
          this.coins = [];
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        Input.prototype.address = "";
        Input.prototype.coins = $util.emptyArray;
        Input.create = function create(properties) {
          return new Input(properties);
        };
        Input.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.address != null && Object.hasOwnProperty.call(m, "address"))
            w.uint32(10).string(m.address);
          if (m.coins != null && m.coins.length) {
            for (var i = 0; i < m.coins.length; ++i)
              $root.cosmos.base.v1beta1.Coin.encode(
                m.coins[i],
                w.uint32(18).fork()
              ).ldelim();
          }
          return w;
        };
        Input.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.cosmos.bank.v1beta1.Input();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.address = r.string();
                break;
              case 2:
                if (!(m.coins && m.coins.length)) m.coins = [];
                m.coins.push(
                  $root.cosmos.base.v1beta1.Coin.decode(r, r.uint32())
                );
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        Input.fromObject = function fromObject(d) {
          if (d instanceof $root.cosmos.bank.v1beta1.Input) return d;
          var m = new $root.cosmos.bank.v1beta1.Input();
          if (d.address != null) {
            m.address = String(d.address);
          }
          if (d.coins) {
            if (!Array.isArray(d.coins))
              throw TypeError(
                ".cosmos.bank.v1beta1.Input.coins: array expected"
              );
            m.coins = [];
            for (var i = 0; i < d.coins.length; ++i) {
              if (typeof d.coins[i] !== "object")
                throw TypeError(
                  ".cosmos.bank.v1beta1.Input.coins: object expected"
                );
              m.coins[i] = $root.cosmos.base.v1beta1.Coin.fromObject(
                d.coins[i]
              );
            }
          }
          return m;
        };
        Input.toObject = function toObject(m, o) {
          if (!o) o = {};
          var d = {};
          if (o.arrays || o.defaults) {
            d.coins = [];
          }
          if (o.defaults) {
            d.address = "";
          }
          if (m.address != null && m.hasOwnProperty("address")) {
            d.address = m.address;
          }
          if (m.coins && m.coins.length) {
            d.coins = [];
            for (var j = 0; j < m.coins.length; ++j) {
              d.coins[j] = $root.cosmos.base.v1beta1.Coin.toObject(
                m.coins[j],
                o
              );
            }
          }
          return d;
        };
        Input.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return Input;
      })();
      v1beta1.Output = (function () {
        function Output(p) {
          this.coins = [];
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        Output.prototype.address = "";
        Output.prototype.coins = $util.emptyArray;
        Output.create = function create(properties) {
          return new Output(properties);
        };
        Output.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.address != null && Object.hasOwnProperty.call(m, "address"))
            w.uint32(10).string(m.address);
          if (m.coins != null && m.coins.length) {
            for (var i = 0; i < m.coins.length; ++i)
              $root.cosmos.base.v1beta1.Coin.encode(
                m.coins[i],
                w.uint32(18).fork()
              ).ldelim();
          }
          return w;
        };
        Output.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.cosmos.bank.v1beta1.Output();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.address = r.string();
                break;
              case 2:
                if (!(m.coins && m.coins.length)) m.coins = [];
                m.coins.push(
                  $root.cosmos.base.v1beta1.Coin.decode(r, r.uint32())
                );
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        Output.fromObject = function fromObject(d) {
          if (d instanceof $root.cosmos.bank.v1beta1.Output) return d;
          var m = new $root.cosmos.bank.v1beta1.Output();
          if (d.address != null) {
            m.address = String(d.address);
          }
          if (d.coins) {
            if (!Array.isArray(d.coins))
              throw TypeError(
                ".cosmos.bank.v1beta1.Output.coins: array expected"
              );
            m.coins = [];
            for (var i = 0; i < d.coins.length; ++i) {
              if (typeof d.coins[i] !== "object")
                throw TypeError(
                  ".cosmos.bank.v1beta1.Output.coins: object expected"
                );
              m.coins[i] = $root.cosmos.base.v1beta1.Coin.fromObject(
                d.coins[i]
              );
            }
          }
          return m;
        };
        Output.toObject = function toObject(m, o) {
          if (!o) o = {};
          var d = {};
          if (o.arrays || o.defaults) {
            d.coins = [];
          }
          if (o.defaults) {
            d.address = "";
          }
          if (m.address != null && m.hasOwnProperty("address")) {
            d.address = m.address;
          }
          if (m.coins && m.coins.length) {
            d.coins = [];
            for (var j = 0; j < m.coins.length; ++j) {
              d.coins[j] = $root.cosmos.base.v1beta1.Coin.toObject(
                m.coins[j],
                o
              );
            }
          }
          return d;
        };
        Output.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return Output;
      })();
      v1beta1.Supply = (function () {
        function Supply(p) {
          this.total = [];
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        Supply.prototype.total = $util.emptyArray;
        Supply.create = function create(properties) {
          return new Supply(properties);
        };
        Supply.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.total != null && m.total.length) {
            for (var i = 0; i < m.total.length; ++i)
              $root.cosmos.base.v1beta1.Coin.encode(
                m.total[i],
                w.uint32(10).fork()
              ).ldelim();
          }
          return w;
        };
        Supply.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.cosmos.bank.v1beta1.Supply();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                if (!(m.total && m.total.length)) m.total = [];
                m.total.push(
                  $root.cosmos.base.v1beta1.Coin.decode(r, r.uint32())
                );
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        Supply.fromObject = function fromObject(d) {
          if (d instanceof $root.cosmos.bank.v1beta1.Supply) return d;
          var m = new $root.cosmos.bank.v1beta1.Supply();
          if (d.total) {
            if (!Array.isArray(d.total))
              throw TypeError(
                ".cosmos.bank.v1beta1.Supply.total: array expected"
              );
            m.total = [];
            for (var i = 0; i < d.total.length; ++i) {
              if (typeof d.total[i] !== "object")
                throw TypeError(
                  ".cosmos.bank.v1beta1.Supply.total: object expected"
                );
              m.total[i] = $root.cosmos.base.v1beta1.Coin.fromObject(
                d.total[i]
              );
            }
          }
          return m;
        };
        Supply.toObject = function toObject(m, o) {
          if (!o) o = {};
          var d = {};
          if (o.arrays || o.defaults) {
            d.total = [];
          }
          if (m.total && m.total.length) {
            d.total = [];
            for (var j = 0; j < m.total.length; ++j) {
              d.total[j] = $root.cosmos.base.v1beta1.Coin.toObject(
                m.total[j],
                o
              );
            }
          }
          return d;
        };
        Supply.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return Supply;
      })();
      v1beta1.DenomUnit = (function () {
        function DenomUnit(p) {
          this.aliases = [];
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        DenomUnit.prototype.denom = "";
        DenomUnit.prototype.exponent = 0;
        DenomUnit.prototype.aliases = $util.emptyArray;
        DenomUnit.create = function create(properties) {
          return new DenomUnit(properties);
        };
        DenomUnit.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.denom != null && Object.hasOwnProperty.call(m, "denom"))
            w.uint32(10).string(m.denom);
          if (m.exponent != null && Object.hasOwnProperty.call(m, "exponent"))
            w.uint32(16).uint32(m.exponent);
          if (m.aliases != null && m.aliases.length) {
            for (var i = 0; i < m.aliases.length; ++i)
              w.uint32(26).string(m.aliases[i]);
          }
          return w;
        };
        DenomUnit.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.cosmos.bank.v1beta1.DenomUnit();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.denom = r.string();
                break;
              case 2:
                m.exponent = r.uint32();
                break;
              case 3:
                if (!(m.aliases && m.aliases.length)) m.aliases = [];
                m.aliases.push(r.string());
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        DenomUnit.fromObject = function fromObject(d) {
          if (d instanceof $root.cosmos.bank.v1beta1.DenomUnit) return d;
          var m = new $root.cosmos.bank.v1beta1.DenomUnit();
          if (d.denom != null) {
            m.denom = String(d.denom);
          }
          if (d.exponent != null) {
            m.exponent = d.exponent >>> 0;
          }
          if (d.aliases) {
            if (!Array.isArray(d.aliases))
              throw TypeError(
                ".cosmos.bank.v1beta1.DenomUnit.aliases: array expected"
              );
            m.aliases = [];
            for (var i = 0; i < d.aliases.length; ++i) {
              m.aliases[i] = String(d.aliases[i]);
            }
          }
          return m;
        };
        DenomUnit.toObject = function toObject(m, o) {
          if (!o) o = {};
          var d = {};
          if (o.arrays || o.defaults) {
            d.aliases = [];
          }
          if (o.defaults) {
            d.denom = "";
            d.exponent = 0;
          }
          if (m.denom != null && m.hasOwnProperty("denom")) {
            d.denom = m.denom;
          }
          if (m.exponent != null && m.hasOwnProperty("exponent")) {
            d.exponent = m.exponent;
          }
          if (m.aliases && m.aliases.length) {
            d.aliases = [];
            for (var j = 0; j < m.aliases.length; ++j) {
              d.aliases[j] = m.aliases[j];
            }
          }
          return d;
        };
        DenomUnit.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return DenomUnit;
      })();
      v1beta1.Metadata = (function () {
        function Metadata(p) {
          this.denomUnits = [];
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        Metadata.prototype.description = "";
        Metadata.prototype.denomUnits = $util.emptyArray;
        Metadata.prototype.base = "";
        Metadata.prototype.display = "";
        Metadata.prototype.name = "";
        Metadata.prototype.symbol = "";
        Metadata.prototype.uri = "";
        Metadata.prototype.uriHash = "";
        Metadata.create = function create(properties) {
          return new Metadata(properties);
        };
        Metadata.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (
            m.description != null &&
            Object.hasOwnProperty.call(m, "description")
          )
            w.uint32(10).string(m.description);
          if (m.denomUnits != null && m.denomUnits.length) {
            for (var i = 0; i < m.denomUnits.length; ++i)
              $root.cosmos.bank.v1beta1.DenomUnit.encode(
                m.denomUnits[i],
                w.uint32(18).fork()
              ).ldelim();
          }
          if (m.base != null && Object.hasOwnProperty.call(m, "base"))
            w.uint32(26).string(m.base);
          if (m.display != null && Object.hasOwnProperty.call(m, "display"))
            w.uint32(34).string(m.display);
          if (m.name != null && Object.hasOwnProperty.call(m, "name"))
            w.uint32(42).string(m.name);
          if (m.symbol != null && Object.hasOwnProperty.call(m, "symbol"))
            w.uint32(50).string(m.symbol);
          if (m.uri != null && Object.hasOwnProperty.call(m, "uri"))
            w.uint32(58).string(m.uri);
          if (m.uriHash != null && Object.hasOwnProperty.call(m, "uriHash"))
            w.uint32(66).string(m.uriHash);
          return w;
        };
        Metadata.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.cosmos.bank.v1beta1.Metadata();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.description = r.string();
                break;
              case 2:
                if (!(m.denomUnits && m.denomUnits.length)) m.denomUnits = [];
                m.denomUnits.push(
                  $root.cosmos.bank.v1beta1.DenomUnit.decode(r, r.uint32())
                );
                break;
              case 3:
                m.base = r.string();
                break;
              case 4:
                m.display = r.string();
                break;
              case 5:
                m.name = r.string();
                break;
              case 6:
                m.symbol = r.string();
                break;
              case 7:
                m.uri = r.string();
                break;
              case 8:
                m.uriHash = r.string();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        Metadata.fromObject = function fromObject(d) {
          if (d instanceof $root.cosmos.bank.v1beta1.Metadata) return d;
          var m = new $root.cosmos.bank.v1beta1.Metadata();
          if (d.description != null) {
            m.description = String(d.description);
          }
          if (d.denomUnits) {
            if (!Array.isArray(d.denomUnits))
              throw TypeError(
                ".cosmos.bank.v1beta1.Metadata.denomUnits: array expected"
              );
            m.denomUnits = [];
            for (var i = 0; i < d.denomUnits.length; ++i) {
              if (typeof d.denomUnits[i] !== "object")
                throw TypeError(
                  ".cosmos.bank.v1beta1.Metadata.denomUnits: object expected"
                );
              m.denomUnits[i] = $root.cosmos.bank.v1beta1.DenomUnit.fromObject(
                d.denomUnits[i]
              );
            }
          }
          if (d.base != null) {
            m.base = String(d.base);
          }
          if (d.display != null) {
            m.display = String(d.display);
          }
          if (d.name != null) {
            m.name = String(d.name);
          }
          if (d.symbol != null) {
            m.symbol = String(d.symbol);
          }
          if (d.uri != null) {
            m.uri = String(d.uri);
          }
          if (d.uriHash != null) {
            m.uriHash = String(d.uriHash);
          }
          return m;
        };
        Metadata.toObject = function toObject(m, o) {
          if (!o) o = {};
          var d = {};
          if (o.arrays || o.defaults) {
            d.denomUnits = [];
          }
          if (o.defaults) {
            d.description = "";
            d.base = "";
            d.display = "";
            d.name = "";
            d.symbol = "";
            d.uri = "";
            d.uriHash = "";
          }
          if (m.description != null && m.hasOwnProperty("description")) {
            d.description = m.description;
          }
          if (m.denomUnits && m.denomUnits.length) {
            d.denomUnits = [];
            for (var j = 0; j < m.denomUnits.length; ++j) {
              d.denomUnits[j] = $root.cosmos.bank.v1beta1.DenomUnit.toObject(
                m.denomUnits[j],
                o
              );
            }
          }
          if (m.base != null && m.hasOwnProperty("base")) {
            d.base = m.base;
          }
          if (m.display != null && m.hasOwnProperty("display")) {
            d.display = m.display;
          }
          if (m.name != null && m.hasOwnProperty("name")) {
            d.name = m.name;
          }
          if (m.symbol != null && m.hasOwnProperty("symbol")) {
            d.symbol = m.symbol;
          }
          if (m.uri != null && m.hasOwnProperty("uri")) {
            d.uri = m.uri;
          }
          if (m.uriHash != null && m.hasOwnProperty("uriHash")) {
            d.uriHash = m.uriHash;
          }
          return d;
        };
        Metadata.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return Metadata;
      })();
      return v1beta1;
    })();
    return bank;
  })();
  cosmos.gov = (function () {
    const gov = {};
    gov.v1beta1 = (function () {
      const v1beta1 = {};
      v1beta1.VoteOption = (function () {
        const valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[0] = "VOTE_OPTION_UNSPECIFIED")] = 0;
        values[(valuesById[1] = "VOTE_OPTION_YES")] = 1;
        values[(valuesById[2] = "VOTE_OPTION_ABSTAIN")] = 2;
        values[(valuesById[3] = "VOTE_OPTION_NO")] = 3;
        values[(valuesById[4] = "VOTE_OPTION_NO_WITH_VETO")] = 4;
        return values;
      })();
      v1beta1.WeightedVoteOption = (function () {
        function WeightedVoteOption(p) {
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        WeightedVoteOption.prototype.option = 0;
        WeightedVoteOption.prototype.weight = "";
        WeightedVoteOption.create = function create(properties) {
          return new WeightedVoteOption(properties);
        };
        WeightedVoteOption.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.option != null && Object.hasOwnProperty.call(m, "option"))
            w.uint32(8).int32(m.option);
          if (m.weight != null && Object.hasOwnProperty.call(m, "weight"))
            w.uint32(18).string(m.weight);
          return w;
        };
        WeightedVoteOption.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.cosmos.gov.v1beta1.WeightedVoteOption();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.option = r.int32();
                break;
              case 2:
                m.weight = r.string();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        WeightedVoteOption.fromObject = function fromObject(d) {
          if (d instanceof $root.cosmos.gov.v1beta1.WeightedVoteOption)
            return d;
          var m = new $root.cosmos.gov.v1beta1.WeightedVoteOption();
          switch (d.option) {
            case "VOTE_OPTION_UNSPECIFIED":
            case 0:
              m.option = 0;
              break;
            case "VOTE_OPTION_YES":
            case 1:
              m.option = 1;
              break;
            case "VOTE_OPTION_ABSTAIN":
            case 2:
              m.option = 2;
              break;
            case "VOTE_OPTION_NO":
            case 3:
              m.option = 3;
              break;
            case "VOTE_OPTION_NO_WITH_VETO":
            case 4:
              m.option = 4;
              break;
          }
          if (d.weight != null) {
            m.weight = String(d.weight);
          }
          return m;
        };
        WeightedVoteOption.toObject = function toObject(m, o) {
          if (!o) o = {};
          var d = {};
          if (o.defaults) {
            d.option = o.enums === String ? "VOTE_OPTION_UNSPECIFIED" : 0;
            d.weight = "";
          }
          if (m.option != null && m.hasOwnProperty("option")) {
            d.option =
              o.enums === String
                ? $root.cosmos.gov.v1beta1.VoteOption[m.option]
                : m.option;
          }
          if (m.weight != null && m.hasOwnProperty("weight")) {
            d.weight = m.weight;
          }
          return d;
        };
        WeightedVoteOption.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return WeightedVoteOption;
      })();
      v1beta1.TextProposal = (function () {
        function TextProposal(p) {
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        TextProposal.prototype.title = "";
        TextProposal.prototype.description = "";
        TextProposal.create = function create(properties) {
          return new TextProposal(properties);
        };
        TextProposal.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.title != null && Object.hasOwnProperty.call(m, "title"))
            w.uint32(10).string(m.title);
          if (
            m.description != null &&
            Object.hasOwnProperty.call(m, "description")
          )
            w.uint32(18).string(m.description);
          return w;
        };
        TextProposal.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.cosmos.gov.v1beta1.TextProposal();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.title = r.string();
                break;
              case 2:
                m.description = r.string();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        TextProposal.fromObject = function fromObject(d) {
          if (d instanceof $root.cosmos.gov.v1beta1.TextProposal) return d;
          var m = new $root.cosmos.gov.v1beta1.TextProposal();
          if (d.title != null) {
            m.title = String(d.title);
          }
          if (d.description != null) {
            m.description = String(d.description);
          }
          return m;
        };
        TextProposal.toObject = function toObject(m, o) {
          if (!o) o = {};
          var d = {};
          if (o.defaults) {
            d.title = "";
            d.description = "";
          }
          if (m.title != null && m.hasOwnProperty("title")) {
            d.title = m.title;
          }
          if (m.description != null && m.hasOwnProperty("description")) {
            d.description = m.description;
          }
          return d;
        };
        TextProposal.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return TextProposal;
      })();
      v1beta1.Deposit = (function () {
        function Deposit(p) {
          this.amount = [];
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        Deposit.prototype.proposalId = $util.Long
          ? $util.Long.fromBits(0, 0, true)
          : 0;
        Deposit.prototype.depositor = "";
        Deposit.prototype.amount = $util.emptyArray;
        Deposit.create = function create(properties) {
          return new Deposit(properties);
        };
        Deposit.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (
            m.proposalId != null &&
            Object.hasOwnProperty.call(m, "proposalId")
          )
            w.uint32(8).uint64(m.proposalId);
          if (m.depositor != null && Object.hasOwnProperty.call(m, "depositor"))
            w.uint32(18).string(m.depositor);
          if (m.amount != null && m.amount.length) {
            for (var i = 0; i < m.amount.length; ++i)
              $root.cosmos.base.v1beta1.Coin.encode(
                m.amount[i],
                w.uint32(26).fork()
              ).ldelim();
          }
          return w;
        };
        Deposit.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.cosmos.gov.v1beta1.Deposit();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.proposalId = r.uint64();
                break;
              case 2:
                m.depositor = r.string();
                break;
              case 3:
                if (!(m.amount && m.amount.length)) m.amount = [];
                m.amount.push(
                  $root.cosmos.base.v1beta1.Coin.decode(r, r.uint32())
                );
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        Deposit.fromObject = function fromObject(d) {
          if (d instanceof $root.cosmos.gov.v1beta1.Deposit) return d;
          var m = new $root.cosmos.gov.v1beta1.Deposit();
          if (d.proposalId != null) {
            if ($util.Long)
              (m.proposalId = $util.Long.fromValue(
                d.proposalId
              )).unsigned = true;
            else if (typeof d.proposalId === "string")
              m.proposalId = parseInt(d.proposalId, 10);
            else if (typeof d.proposalId === "number")
              m.proposalId = d.proposalId;
            else if (typeof d.proposalId === "object")
              m.proposalId = new $util.LongBits(
                d.proposalId.low >>> 0,
                d.proposalId.high >>> 0
              ).toNumber(true);
          }
          if (d.depositor != null) {
            m.depositor = String(d.depositor);
          }
          if (d.amount) {
            if (!Array.isArray(d.amount))
              throw TypeError(
                ".cosmos.gov.v1beta1.Deposit.amount: array expected"
              );
            m.amount = [];
            for (var i = 0; i < d.amount.length; ++i) {
              if (typeof d.amount[i] !== "object")
                throw TypeError(
                  ".cosmos.gov.v1beta1.Deposit.amount: object expected"
                );
              m.amount[i] = $root.cosmos.base.v1beta1.Coin.fromObject(
                d.amount[i]
              );
            }
          }
          return m;
        };
        Deposit.toObject = function toObject(m, o) {
          if (!o) o = {};
          var d = {};
          if (o.arrays || o.defaults) {
            d.amount = [];
          }
          if (o.defaults) {
            if ($util.Long) {
              var n = new $util.Long(0, 0, true);
              d.proposalId =
                o.longs === String
                  ? n.toString()
                  : o.longs === Number
                  ? n.toNumber()
                  : n;
            } else d.proposalId = o.longs === String ? "0" : 0;
            d.depositor = "";
          }
          if (m.proposalId != null && m.hasOwnProperty("proposalId")) {
            if (typeof m.proposalId === "number")
              d.proposalId =
                o.longs === String ? String(m.proposalId) : m.proposalId;
            else
              d.proposalId =
                o.longs === String
                  ? $util.Long.prototype.toString.call(m.proposalId)
                  : o.longs === Number
                  ? new $util.LongBits(
                      m.proposalId.low >>> 0,
                      m.proposalId.high >>> 0
                    ).toNumber(true)
                  : m.proposalId;
          }
          if (m.depositor != null && m.hasOwnProperty("depositor")) {
            d.depositor = m.depositor;
          }
          if (m.amount && m.amount.length) {
            d.amount = [];
            for (var j = 0; j < m.amount.length; ++j) {
              d.amount[j] = $root.cosmos.base.v1beta1.Coin.toObject(
                m.amount[j],
                o
              );
            }
          }
          return d;
        };
        Deposit.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return Deposit;
      })();
      v1beta1.Proposal = (function () {
        function Proposal(p) {
          this.totalDeposit = [];
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        Proposal.prototype.proposalId = $util.Long
          ? $util.Long.fromBits(0, 0, true)
          : 0;
        Proposal.prototype.content = null;
        Proposal.prototype.status = 0;
        Proposal.prototype.finalTallyResult = null;
        Proposal.prototype.submitTime = null;
        Proposal.prototype.depositEndTime = null;
        Proposal.prototype.totalDeposit = $util.emptyArray;
        Proposal.prototype.votingStartTime = null;
        Proposal.prototype.votingEndTime = null;
        Proposal.create = function create(properties) {
          return new Proposal(properties);
        };
        Proposal.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (
            m.proposalId != null &&
            Object.hasOwnProperty.call(m, "proposalId")
          )
            w.uint32(8).uint64(m.proposalId);
          if (m.content != null && Object.hasOwnProperty.call(m, "content"))
            $root.google.protobuf.Any.encode(
              m.content,
              w.uint32(18).fork()
            ).ldelim();
          if (m.status != null && Object.hasOwnProperty.call(m, "status"))
            w.uint32(24).int32(m.status);
          if (
            m.finalTallyResult != null &&
            Object.hasOwnProperty.call(m, "finalTallyResult")
          )
            $root.cosmos.gov.v1beta1.TallyResult.encode(
              m.finalTallyResult,
              w.uint32(34).fork()
            ).ldelim();
          if (
            m.submitTime != null &&
            Object.hasOwnProperty.call(m, "submitTime")
          )
            $root.google.protobuf.Timestamp.encode(
              m.submitTime,
              w.uint32(42).fork()
            ).ldelim();
          if (
            m.depositEndTime != null &&
            Object.hasOwnProperty.call(m, "depositEndTime")
          )
            $root.google.protobuf.Timestamp.encode(
              m.depositEndTime,
              w.uint32(50).fork()
            ).ldelim();
          if (m.totalDeposit != null && m.totalDeposit.length) {
            for (var i = 0; i < m.totalDeposit.length; ++i)
              $root.cosmos.base.v1beta1.Coin.encode(
                m.totalDeposit[i],
                w.uint32(58).fork()
              ).ldelim();
          }
          if (
            m.votingStartTime != null &&
            Object.hasOwnProperty.call(m, "votingStartTime")
          )
            $root.google.protobuf.Timestamp.encode(
              m.votingStartTime,
              w.uint32(66).fork()
            ).ldelim();
          if (
            m.votingEndTime != null &&
            Object.hasOwnProperty.call(m, "votingEndTime")
          )
            $root.google.protobuf.Timestamp.encode(
              m.votingEndTime,
              w.uint32(74).fork()
            ).ldelim();
          return w;
        };
        Proposal.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.cosmos.gov.v1beta1.Proposal();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.proposalId = r.uint64();
                break;
              case 2:
                m.content = $root.google.protobuf.Any.decode(r, r.uint32());
                break;
              case 3:
                m.status = r.int32();
                break;
              case 4:
                m.finalTallyResult =
                  $root.cosmos.gov.v1beta1.TallyResult.decode(r, r.uint32());
                break;
              case 5:
                m.submitTime = $root.google.protobuf.Timestamp.decode(
                  r,
                  r.uint32()
                );
                break;
              case 6:
                m.depositEndTime = $root.google.protobuf.Timestamp.decode(
                  r,
                  r.uint32()
                );
                break;
              case 7:
                if (!(m.totalDeposit && m.totalDeposit.length))
                  m.totalDeposit = [];
                m.totalDeposit.push(
                  $root.cosmos.base.v1beta1.Coin.decode(r, r.uint32())
                );
                break;
              case 8:
                m.votingStartTime = $root.google.protobuf.Timestamp.decode(
                  r,
                  r.uint32()
                );
                break;
              case 9:
                m.votingEndTime = $root.google.protobuf.Timestamp.decode(
                  r,
                  r.uint32()
                );
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        Proposal.fromObject = function fromObject(d) {
          if (d instanceof $root.cosmos.gov.v1beta1.Proposal) return d;
          var m = new $root.cosmos.gov.v1beta1.Proposal();
          if (d.proposalId != null) {
            if ($util.Long)
              (m.proposalId = $util.Long.fromValue(
                d.proposalId
              )).unsigned = true;
            else if (typeof d.proposalId === "string")
              m.proposalId = parseInt(d.proposalId, 10);
            else if (typeof d.proposalId === "number")
              m.proposalId = d.proposalId;
            else if (typeof d.proposalId === "object")
              m.proposalId = new $util.LongBits(
                d.proposalId.low >>> 0,
                d.proposalId.high >>> 0
              ).toNumber(true);
          }
          if (d.content != null) {
            if (typeof d.content !== "object")
              throw TypeError(
                ".cosmos.gov.v1beta1.Proposal.content: object expected"
              );
            m.content = $root.google.protobuf.Any.fromObject(d.content);
          }
          switch (d.status) {
            case "PROPOSAL_STATUS_UNSPECIFIED":
            case 0:
              m.status = 0;
              break;
            case "PROPOSAL_STATUS_DEPOSIT_PERIOD":
            case 1:
              m.status = 1;
              break;
            case "PROPOSAL_STATUS_VOTING_PERIOD":
            case 2:
              m.status = 2;
              break;
            case "PROPOSAL_STATUS_PASSED":
            case 3:
              m.status = 3;
              break;
            case "PROPOSAL_STATUS_REJECTED":
            case 4:
              m.status = 4;
              break;
            case "PROPOSAL_STATUS_FAILED":
            case 5:
              m.status = 5;
              break;
          }
          if (d.finalTallyResult != null) {
            if (typeof d.finalTallyResult !== "object")
              throw TypeError(
                ".cosmos.gov.v1beta1.Proposal.finalTallyResult: object expected"
              );
            m.finalTallyResult =
              $root.cosmos.gov.v1beta1.TallyResult.fromObject(
                d.finalTallyResult
              );
          }
          if (d.submitTime != null) {
            if (typeof d.submitTime !== "object")
              throw TypeError(
                ".cosmos.gov.v1beta1.Proposal.submitTime: object expected"
              );
            m.submitTime = $root.google.protobuf.Timestamp.fromObject(
              d.submitTime
            );
          }
          if (d.depositEndTime != null) {
            if (typeof d.depositEndTime !== "object")
              throw TypeError(
                ".cosmos.gov.v1beta1.Proposal.depositEndTime: object expected"
              );
            m.depositEndTime = $root.google.protobuf.Timestamp.fromObject(
              d.depositEndTime
            );
          }
          if (d.totalDeposit) {
            if (!Array.isArray(d.totalDeposit))
              throw TypeError(
                ".cosmos.gov.v1beta1.Proposal.totalDeposit: array expected"
              );
            m.totalDeposit = [];
            for (var i = 0; i < d.totalDeposit.length; ++i) {
              if (typeof d.totalDeposit[i] !== "object")
                throw TypeError(
                  ".cosmos.gov.v1beta1.Proposal.totalDeposit: object expected"
                );
              m.totalDeposit[i] = $root.cosmos.base.v1beta1.Coin.fromObject(
                d.totalDeposit[i]
              );
            }
          }
          if (d.votingStartTime != null) {
            if (typeof d.votingStartTime !== "object")
              throw TypeError(
                ".cosmos.gov.v1beta1.Proposal.votingStartTime: object expected"
              );
            m.votingStartTime = $root.google.protobuf.Timestamp.fromObject(
              d.votingStartTime
            );
          }
          if (d.votingEndTime != null) {
            if (typeof d.votingEndTime !== "object")
              throw TypeError(
                ".cosmos.gov.v1beta1.Proposal.votingEndTime: object expected"
              );
            m.votingEndTime = $root.google.protobuf.Timestamp.fromObject(
              d.votingEndTime
            );
          }
          return m;
        };
        Proposal.toObject = function toObject(m, o) {
          if (!o) o = {};
          var d = {};
          if (o.arrays || o.defaults) {
            d.totalDeposit = [];
          }
          if (o.defaults) {
            if ($util.Long) {
              var n = new $util.Long(0, 0, true);
              d.proposalId =
                o.longs === String
                  ? n.toString()
                  : o.longs === Number
                  ? n.toNumber()
                  : n;
            } else d.proposalId = o.longs === String ? "0" : 0;
            d.content = null;
            d.status = o.enums === String ? "PROPOSAL_STATUS_UNSPECIFIED" : 0;
            d.finalTallyResult = null;
            d.submitTime = null;
            d.depositEndTime = null;
            d.votingStartTime = null;
            d.votingEndTime = null;
          }
          if (m.proposalId != null && m.hasOwnProperty("proposalId")) {
            if (typeof m.proposalId === "number")
              d.proposalId =
                o.longs === String ? String(m.proposalId) : m.proposalId;
            else
              d.proposalId =
                o.longs === String
                  ? $util.Long.prototype.toString.call(m.proposalId)
                  : o.longs === Number
                  ? new $util.LongBits(
                      m.proposalId.low >>> 0,
                      m.proposalId.high >>> 0
                    ).toNumber(true)
                  : m.proposalId;
          }
          if (m.content != null && m.hasOwnProperty("content")) {
            d.content = $root.google.protobuf.Any.toObject(m.content, o);
          }
          if (m.status != null && m.hasOwnProperty("status")) {
            d.status =
              o.enums === String
                ? $root.cosmos.gov.v1beta1.ProposalStatus[m.status]
                : m.status;
          }
          if (
            m.finalTallyResult != null &&
            m.hasOwnProperty("finalTallyResult")
          ) {
            d.finalTallyResult = $root.cosmos.gov.v1beta1.TallyResult.toObject(
              m.finalTallyResult,
              o
            );
          }
          if (m.submitTime != null && m.hasOwnProperty("submitTime")) {
            d.submitTime = $root.google.protobuf.Timestamp.toObject(
              m.submitTime,
              o
            );
          }
          if (m.depositEndTime != null && m.hasOwnProperty("depositEndTime")) {
            d.depositEndTime = $root.google.protobuf.Timestamp.toObject(
              m.depositEndTime,
              o
            );
          }
          if (m.totalDeposit && m.totalDeposit.length) {
            d.totalDeposit = [];
            for (var j = 0; j < m.totalDeposit.length; ++j) {
              d.totalDeposit[j] = $root.cosmos.base.v1beta1.Coin.toObject(
                m.totalDeposit[j],
                o
              );
            }
          }
          if (
            m.votingStartTime != null &&
            m.hasOwnProperty("votingStartTime")
          ) {
            d.votingStartTime = $root.google.protobuf.Timestamp.toObject(
              m.votingStartTime,
              o
            );
          }
          if (m.votingEndTime != null && m.hasOwnProperty("votingEndTime")) {
            d.votingEndTime = $root.google.protobuf.Timestamp.toObject(
              m.votingEndTime,
              o
            );
          }
          return d;
        };
        Proposal.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return Proposal;
      })();
      v1beta1.ProposalStatus = (function () {
        const valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[0] = "PROPOSAL_STATUS_UNSPECIFIED")] = 0;
        values[(valuesById[1] = "PROPOSAL_STATUS_DEPOSIT_PERIOD")] = 1;
        values[(valuesById[2] = "PROPOSAL_STATUS_VOTING_PERIOD")] = 2;
        values[(valuesById[3] = "PROPOSAL_STATUS_PASSED")] = 3;
        values[(valuesById[4] = "PROPOSAL_STATUS_REJECTED")] = 4;
        values[(valuesById[5] = "PROPOSAL_STATUS_FAILED")] = 5;
        return values;
      })();
      v1beta1.TallyResult = (function () {
        function TallyResult(p) {
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        TallyResult.prototype.yes = "";
        TallyResult.prototype.abstain = "";
        TallyResult.prototype.no = "";
        TallyResult.prototype.noWithVeto = "";
        TallyResult.create = function create(properties) {
          return new TallyResult(properties);
        };
        TallyResult.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.yes != null && Object.hasOwnProperty.call(m, "yes"))
            w.uint32(10).string(m.yes);
          if (m.abstain != null && Object.hasOwnProperty.call(m, "abstain"))
            w.uint32(18).string(m.abstain);
          if (m.no != null && Object.hasOwnProperty.call(m, "no"))
            w.uint32(26).string(m.no);
          if (
            m.noWithVeto != null &&
            Object.hasOwnProperty.call(m, "noWithVeto")
          )
            w.uint32(34).string(m.noWithVeto);
          return w;
        };
        TallyResult.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.cosmos.gov.v1beta1.TallyResult();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.yes = r.string();
                break;
              case 2:
                m.abstain = r.string();
                break;
              case 3:
                m.no = r.string();
                break;
              case 4:
                m.noWithVeto = r.string();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        TallyResult.fromObject = function fromObject(d) {
          if (d instanceof $root.cosmos.gov.v1beta1.TallyResult) return d;
          var m = new $root.cosmos.gov.v1beta1.TallyResult();
          if (d.yes != null) {
            m.yes = String(d.yes);
          }
          if (d.abstain != null) {
            m.abstain = String(d.abstain);
          }
          if (d.no != null) {
            m.no = String(d.no);
          }
          if (d.noWithVeto != null) {
            m.noWithVeto = String(d.noWithVeto);
          }
          return m;
        };
        TallyResult.toObject = function toObject(m, o) {
          if (!o) o = {};
          var d = {};
          if (o.defaults) {
            d.yes = "";
            d.abstain = "";
            d.no = "";
            d.noWithVeto = "";
          }
          if (m.yes != null && m.hasOwnProperty("yes")) {
            d.yes = m.yes;
          }
          if (m.abstain != null && m.hasOwnProperty("abstain")) {
            d.abstain = m.abstain;
          }
          if (m.no != null && m.hasOwnProperty("no")) {
            d.no = m.no;
          }
          if (m.noWithVeto != null && m.hasOwnProperty("noWithVeto")) {
            d.noWithVeto = m.noWithVeto;
          }
          return d;
        };
        TallyResult.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return TallyResult;
      })();
      v1beta1.Vote = (function () {
        function Vote(p) {
          this.options = [];
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        Vote.prototype.proposalId = $util.Long
          ? $util.Long.fromBits(0, 0, true)
          : 0;
        Vote.prototype.voter = "";
        Vote.prototype.option = 0;
        Vote.prototype.options = $util.emptyArray;
        Vote.create = function create(properties) {
          return new Vote(properties);
        };
        Vote.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (
            m.proposalId != null &&
            Object.hasOwnProperty.call(m, "proposalId")
          )
            w.uint32(8).uint64(m.proposalId);
          if (m.voter != null && Object.hasOwnProperty.call(m, "voter"))
            w.uint32(18).string(m.voter);
          if (m.option != null && Object.hasOwnProperty.call(m, "option"))
            w.uint32(24).int32(m.option);
          if (m.options != null && m.options.length) {
            for (var i = 0; i < m.options.length; ++i)
              $root.cosmos.gov.v1beta1.WeightedVoteOption.encode(
                m.options[i],
                w.uint32(34).fork()
              ).ldelim();
          }
          return w;
        };
        Vote.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.cosmos.gov.v1beta1.Vote();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.proposalId = r.uint64();
                break;
              case 2:
                m.voter = r.string();
                break;
              case 3:
                m.option = r.int32();
                break;
              case 4:
                if (!(m.options && m.options.length)) m.options = [];
                m.options.push(
                  $root.cosmos.gov.v1beta1.WeightedVoteOption.decode(
                    r,
                    r.uint32()
                  )
                );
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        Vote.fromObject = function fromObject(d) {
          if (d instanceof $root.cosmos.gov.v1beta1.Vote) return d;
          var m = new $root.cosmos.gov.v1beta1.Vote();
          if (d.proposalId != null) {
            if ($util.Long)
              (m.proposalId = $util.Long.fromValue(
                d.proposalId
              )).unsigned = true;
            else if (typeof d.proposalId === "string")
              m.proposalId = parseInt(d.proposalId, 10);
            else if (typeof d.proposalId === "number")
              m.proposalId = d.proposalId;
            else if (typeof d.proposalId === "object")
              m.proposalId = new $util.LongBits(
                d.proposalId.low >>> 0,
                d.proposalId.high >>> 0
              ).toNumber(true);
          }
          if (d.voter != null) {
            m.voter = String(d.voter);
          }
          switch (d.option) {
            case "VOTE_OPTION_UNSPECIFIED":
            case 0:
              m.option = 0;
              break;
            case "VOTE_OPTION_YES":
            case 1:
              m.option = 1;
              break;
            case "VOTE_OPTION_ABSTAIN":
            case 2:
              m.option = 2;
              break;
            case "VOTE_OPTION_NO":
            case 3:
              m.option = 3;
              break;
            case "VOTE_OPTION_NO_WITH_VETO":
            case 4:
              m.option = 4;
              break;
          }
          if (d.options) {
            if (!Array.isArray(d.options))
              throw TypeError(
                ".cosmos.gov.v1beta1.Vote.options: array expected"
              );
            m.options = [];
            for (var i = 0; i < d.options.length; ++i) {
              if (typeof d.options[i] !== "object")
                throw TypeError(
                  ".cosmos.gov.v1beta1.Vote.options: object expected"
                );
              m.options[i] =
                $root.cosmos.gov.v1beta1.WeightedVoteOption.fromObject(
                  d.options[i]
                );
            }
          }
          return m;
        };
        Vote.toObject = function toObject(m, o) {
          if (!o) o = {};
          var d = {};
          if (o.arrays || o.defaults) {
            d.options = [];
          }
          if (o.defaults) {
            if ($util.Long) {
              var n = new $util.Long(0, 0, true);
              d.proposalId =
                o.longs === String
                  ? n.toString()
                  : o.longs === Number
                  ? n.toNumber()
                  : n;
            } else d.proposalId = o.longs === String ? "0" : 0;
            d.voter = "";
            d.option = o.enums === String ? "VOTE_OPTION_UNSPECIFIED" : 0;
          }
          if (m.proposalId != null && m.hasOwnProperty("proposalId")) {
            if (typeof m.proposalId === "number")
              d.proposalId =
                o.longs === String ? String(m.proposalId) : m.proposalId;
            else
              d.proposalId =
                o.longs === String
                  ? $util.Long.prototype.toString.call(m.proposalId)
                  : o.longs === Number
                  ? new $util.LongBits(
                      m.proposalId.low >>> 0,
                      m.proposalId.high >>> 0
                    ).toNumber(true)
                  : m.proposalId;
          }
          if (m.voter != null && m.hasOwnProperty("voter")) {
            d.voter = m.voter;
          }
          if (m.option != null && m.hasOwnProperty("option")) {
            d.option =
              o.enums === String
                ? $root.cosmos.gov.v1beta1.VoteOption[m.option]
                : m.option;
          }
          if (m.options && m.options.length) {
            d.options = [];
            for (var j = 0; j < m.options.length; ++j) {
              d.options[j] =
                $root.cosmos.gov.v1beta1.WeightedVoteOption.toObject(
                  m.options[j],
                  o
                );
            }
          }
          return d;
        };
        Vote.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return Vote;
      })();
      v1beta1.DepositParams = (function () {
        function DepositParams(p) {
          this.minDeposit = [];
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        DepositParams.prototype.minDeposit = $util.emptyArray;
        DepositParams.prototype.maxDepositPeriod = null;
        DepositParams.create = function create(properties) {
          return new DepositParams(properties);
        };
        DepositParams.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.minDeposit != null && m.minDeposit.length) {
            for (var i = 0; i < m.minDeposit.length; ++i)
              $root.cosmos.base.v1beta1.Coin.encode(
                m.minDeposit[i],
                w.uint32(10).fork()
              ).ldelim();
          }
          if (
            m.maxDepositPeriod != null &&
            Object.hasOwnProperty.call(m, "maxDepositPeriod")
          )
            $root.google.protobuf.Duration.encode(
              m.maxDepositPeriod,
              w.uint32(18).fork()
            ).ldelim();
          return w;
        };
        DepositParams.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.cosmos.gov.v1beta1.DepositParams();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                if (!(m.minDeposit && m.minDeposit.length)) m.minDeposit = [];
                m.minDeposit.push(
                  $root.cosmos.base.v1beta1.Coin.decode(r, r.uint32())
                );
                break;
              case 2:
                m.maxDepositPeriod = $root.google.protobuf.Duration.decode(
                  r,
                  r.uint32()
                );
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        DepositParams.fromObject = function fromObject(d) {
          if (d instanceof $root.cosmos.gov.v1beta1.DepositParams) return d;
          var m = new $root.cosmos.gov.v1beta1.DepositParams();
          if (d.minDeposit) {
            if (!Array.isArray(d.minDeposit))
              throw TypeError(
                ".cosmos.gov.v1beta1.DepositParams.minDeposit: array expected"
              );
            m.minDeposit = [];
            for (var i = 0; i < d.minDeposit.length; ++i) {
              if (typeof d.minDeposit[i] !== "object")
                throw TypeError(
                  ".cosmos.gov.v1beta1.DepositParams.minDeposit: object expected"
                );
              m.minDeposit[i] = $root.cosmos.base.v1beta1.Coin.fromObject(
                d.minDeposit[i]
              );
            }
          }
          if (d.maxDepositPeriod != null) {
            if (typeof d.maxDepositPeriod !== "object")
              throw TypeError(
                ".cosmos.gov.v1beta1.DepositParams.maxDepositPeriod: object expected"
              );
            m.maxDepositPeriod = $root.google.protobuf.Duration.fromObject(
              d.maxDepositPeriod
            );
          }
          return m;
        };
        DepositParams.toObject = function toObject(m, o) {
          if (!o) o = {};
          var d = {};
          if (o.arrays || o.defaults) {
            d.minDeposit = [];
          }
          if (o.defaults) {
            d.maxDepositPeriod = null;
          }
          if (m.minDeposit && m.minDeposit.length) {
            d.minDeposit = [];
            for (var j = 0; j < m.minDeposit.length; ++j) {
              d.minDeposit[j] = $root.cosmos.base.v1beta1.Coin.toObject(
                m.minDeposit[j],
                o
              );
            }
          }
          if (
            m.maxDepositPeriod != null &&
            m.hasOwnProperty("maxDepositPeriod")
          ) {
            d.maxDepositPeriod = $root.google.protobuf.Duration.toObject(
              m.maxDepositPeriod,
              o
            );
          }
          return d;
        };
        DepositParams.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return DepositParams;
      })();
      v1beta1.VotingParams = (function () {
        function VotingParams(p) {
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        VotingParams.prototype.votingPeriod = null;
        VotingParams.create = function create(properties) {
          return new VotingParams(properties);
        };
        VotingParams.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (
            m.votingPeriod != null &&
            Object.hasOwnProperty.call(m, "votingPeriod")
          )
            $root.google.protobuf.Duration.encode(
              m.votingPeriod,
              w.uint32(10).fork()
            ).ldelim();
          return w;
        };
        VotingParams.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.cosmos.gov.v1beta1.VotingParams();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.votingPeriod = $root.google.protobuf.Duration.decode(
                  r,
                  r.uint32()
                );
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        VotingParams.fromObject = function fromObject(d) {
          if (d instanceof $root.cosmos.gov.v1beta1.VotingParams) return d;
          var m = new $root.cosmos.gov.v1beta1.VotingParams();
          if (d.votingPeriod != null) {
            if (typeof d.votingPeriod !== "object")
              throw TypeError(
                ".cosmos.gov.v1beta1.VotingParams.votingPeriod: object expected"
              );
            m.votingPeriod = $root.google.protobuf.Duration.fromObject(
              d.votingPeriod
            );
          }
          return m;
        };
        VotingParams.toObject = function toObject(m, o) {
          if (!o) o = {};
          var d = {};
          if (o.defaults) {
            d.votingPeriod = null;
          }
          if (m.votingPeriod != null && m.hasOwnProperty("votingPeriod")) {
            d.votingPeriod = $root.google.protobuf.Duration.toObject(
              m.votingPeriod,
              o
            );
          }
          return d;
        };
        VotingParams.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return VotingParams;
      })();
      v1beta1.TallyParams = (function () {
        function TallyParams(p) {
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        TallyParams.prototype.quorum = $util.newBuffer([]);
        TallyParams.prototype.threshold = $util.newBuffer([]);
        TallyParams.prototype.vetoThreshold = $util.newBuffer([]);
        TallyParams.create = function create(properties) {
          return new TallyParams(properties);
        };
        TallyParams.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.quorum != null && Object.hasOwnProperty.call(m, "quorum"))
            w.uint32(10).bytes(m.quorum);
          if (m.threshold != null && Object.hasOwnProperty.call(m, "threshold"))
            w.uint32(18).bytes(m.threshold);
          if (
            m.vetoThreshold != null &&
            Object.hasOwnProperty.call(m, "vetoThreshold")
          )
            w.uint32(26).bytes(m.vetoThreshold);
          return w;
        };
        TallyParams.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.cosmos.gov.v1beta1.TallyParams();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.quorum = r.bytes();
                break;
              case 2:
                m.threshold = r.bytes();
                break;
              case 3:
                m.vetoThreshold = r.bytes();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        TallyParams.fromObject = function fromObject(d) {
          if (d instanceof $root.cosmos.gov.v1beta1.TallyParams) return d;
          var m = new $root.cosmos.gov.v1beta1.TallyParams();
          if (d.quorum != null) {
            if (typeof d.quorum === "string")
              $util.base64.decode(
                d.quorum,
                (m.quorum = $util.newBuffer($util.base64.length(d.quorum))),
                0
              );
            else if (d.quorum.length) m.quorum = d.quorum;
          }
          if (d.threshold != null) {
            if (typeof d.threshold === "string")
              $util.base64.decode(
                d.threshold,
                (m.threshold = $util.newBuffer(
                  $util.base64.length(d.threshold)
                )),
                0
              );
            else if (d.threshold.length) m.threshold = d.threshold;
          }
          if (d.vetoThreshold != null) {
            if (typeof d.vetoThreshold === "string")
              $util.base64.decode(
                d.vetoThreshold,
                (m.vetoThreshold = $util.newBuffer(
                  $util.base64.length(d.vetoThreshold)
                )),
                0
              );
            else if (d.vetoThreshold.length) m.vetoThreshold = d.vetoThreshold;
          }
          return m;
        };
        TallyParams.toObject = function toObject(m, o) {
          if (!o) o = {};
          var d = {};
          if (o.defaults) {
            if (o.bytes === String) d.quorum = "";
            else {
              d.quorum = [];
              if (o.bytes !== Array) d.quorum = $util.newBuffer(d.quorum);
            }
            if (o.bytes === String) d.threshold = "";
            else {
              d.threshold = [];
              if (o.bytes !== Array) d.threshold = $util.newBuffer(d.threshold);
            }
            if (o.bytes === String) d.vetoThreshold = "";
            else {
              d.vetoThreshold = [];
              if (o.bytes !== Array)
                d.vetoThreshold = $util.newBuffer(d.vetoThreshold);
            }
          }
          if (m.quorum != null && m.hasOwnProperty("quorum")) {
            d.quorum =
              o.bytes === String
                ? $util.base64.encode(m.quorum, 0, m.quorum.length)
                : o.bytes === Array
                ? Array.prototype.slice.call(m.quorum)
                : m.quorum;
          }
          if (m.threshold != null && m.hasOwnProperty("threshold")) {
            d.threshold =
              o.bytes === String
                ? $util.base64.encode(m.threshold, 0, m.threshold.length)
                : o.bytes === Array
                ? Array.prototype.slice.call(m.threshold)
                : m.threshold;
          }
          if (m.vetoThreshold != null && m.hasOwnProperty("vetoThreshold")) {
            d.vetoThreshold =
              o.bytes === String
                ? $util.base64.encode(
                    m.vetoThreshold,
                    0,
                    m.vetoThreshold.length
                  )
                : o.bytes === Array
                ? Array.prototype.slice.call(m.vetoThreshold)
                : m.vetoThreshold;
          }
          return d;
        };
        TallyParams.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return TallyParams;
      })();
      v1beta1.Msg = (function () {
        function Msg(rpcImpl, requestDelimited, responseDelimited) {
          $protobuf.rpc.Service.call(
            this,
            rpcImpl,
            requestDelimited,
            responseDelimited
          );
        }
        (Msg.prototype = Object.create(
          $protobuf.rpc.Service.prototype
        )).constructor = Msg;
        Msg.create = function create(
          rpcImpl,
          requestDelimited,
          responseDelimited
        ) {
          return new this(rpcImpl, requestDelimited, responseDelimited);
        };
        Object.defineProperty(
          (Msg.prototype.submitProposal = function submitProposal(
            request,
            callback
          ) {
            return this.rpcCall(
              submitProposal,
              $root.cosmos.gov.v1beta1.MsgSubmitProposal,
              $root.cosmos.gov.v1beta1.MsgSubmitProposalResponse,
              request,
              callback
            );
          }),
          "name",
          { value: "SubmitProposal" }
        );
        Object.defineProperty(
          (Msg.prototype.vote = function vote(request, callback) {
            return this.rpcCall(
              vote,
              $root.cosmos.gov.v1beta1.MsgVote,
              $root.cosmos.gov.v1beta1.MsgVoteResponse,
              request,
              callback
            );
          }),
          "name",
          { value: "Vote" }
        );
        Object.defineProperty(
          (Msg.prototype.voteWeighted = function voteWeighted(
            request,
            callback
          ) {
            return this.rpcCall(
              voteWeighted,
              $root.cosmos.gov.v1beta1.MsgVoteWeighted,
              $root.cosmos.gov.v1beta1.MsgVoteWeightedResponse,
              request,
              callback
            );
          }),
          "name",
          { value: "VoteWeighted" }
        );
        Object.defineProperty(
          (Msg.prototype.deposit = function deposit(request, callback) {
            return this.rpcCall(
              deposit,
              $root.cosmos.gov.v1beta1.MsgDeposit,
              $root.cosmos.gov.v1beta1.MsgDepositResponse,
              request,
              callback
            );
          }),
          "name",
          { value: "Deposit" }
        );
        return Msg;
      })();
      v1beta1.MsgSubmitProposal = (function () {
        function MsgSubmitProposal(p) {
          this.initialDeposit = [];
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        MsgSubmitProposal.prototype.content = null;
        MsgSubmitProposal.prototype.initialDeposit = $util.emptyArray;
        MsgSubmitProposal.prototype.proposer = "";
        MsgSubmitProposal.create = function create(properties) {
          return new MsgSubmitProposal(properties);
        };
        MsgSubmitProposal.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.content != null && Object.hasOwnProperty.call(m, "content"))
            $root.google.protobuf.Any.encode(
              m.content,
              w.uint32(10).fork()
            ).ldelim();
          if (m.initialDeposit != null && m.initialDeposit.length) {
            for (var i = 0; i < m.initialDeposit.length; ++i)
              $root.cosmos.base.v1beta1.Coin.encode(
                m.initialDeposit[i],
                w.uint32(18).fork()
              ).ldelim();
          }
          if (m.proposer != null && Object.hasOwnProperty.call(m, "proposer"))
            w.uint32(26).string(m.proposer);
          return w;
        };
        MsgSubmitProposal.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.cosmos.gov.v1beta1.MsgSubmitProposal();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.content = $root.google.protobuf.Any.decode(r, r.uint32());
                break;
              case 2:
                if (!(m.initialDeposit && m.initialDeposit.length))
                  m.initialDeposit = [];
                m.initialDeposit.push(
                  $root.cosmos.base.v1beta1.Coin.decode(r, r.uint32())
                );
                break;
              case 3:
                m.proposer = r.string();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        MsgSubmitProposal.fromObject = function fromObject(d) {
          if (d instanceof $root.cosmos.gov.v1beta1.MsgSubmitProposal) return d;
          var m = new $root.cosmos.gov.v1beta1.MsgSubmitProposal();
          if (d.content != null) {
            if (typeof d.content !== "object")
              throw TypeError(
                ".cosmos.gov.v1beta1.MsgSubmitProposal.content: object expected"
              );
            m.content = $root.google.protobuf.Any.fromObject(d.content);
          }
          if (d.initialDeposit) {
            if (!Array.isArray(d.initialDeposit))
              throw TypeError(
                ".cosmos.gov.v1beta1.MsgSubmitProposal.initialDeposit: array expected"
              );
            m.initialDeposit = [];
            for (var i = 0; i < d.initialDeposit.length; ++i) {
              if (typeof d.initialDeposit[i] !== "object")
                throw TypeError(
                  ".cosmos.gov.v1beta1.MsgSubmitProposal.initialDeposit: object expected"
                );
              m.initialDeposit[i] = $root.cosmos.base.v1beta1.Coin.fromObject(
                d.initialDeposit[i]
              );
            }
          }
          if (d.proposer != null) {
            m.proposer = String(d.proposer);
          }
          return m;
        };
        MsgSubmitProposal.toObject = function toObject(m, o) {
          if (!o) o = {};
          var d = {};
          if (o.arrays || o.defaults) {
            d.initialDeposit = [];
          }
          if (o.defaults) {
            d.content = null;
            d.proposer = "";
          }
          if (m.content != null && m.hasOwnProperty("content")) {
            d.content = $root.google.protobuf.Any.toObject(m.content, o);
          }
          if (m.initialDeposit && m.initialDeposit.length) {
            d.initialDeposit = [];
            for (var j = 0; j < m.initialDeposit.length; ++j) {
              d.initialDeposit[j] = $root.cosmos.base.v1beta1.Coin.toObject(
                m.initialDeposit[j],
                o
              );
            }
          }
          if (m.proposer != null && m.hasOwnProperty("proposer")) {
            d.proposer = m.proposer;
          }
          return d;
        };
        MsgSubmitProposal.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return MsgSubmitProposal;
      })();
      v1beta1.MsgSubmitProposalResponse = (function () {
        function MsgSubmitProposalResponse(p) {
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        MsgSubmitProposalResponse.prototype.proposalId = $util.Long
          ? $util.Long.fromBits(0, 0, true)
          : 0;
        MsgSubmitProposalResponse.create = function create(properties) {
          return new MsgSubmitProposalResponse(properties);
        };
        MsgSubmitProposalResponse.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (
            m.proposalId != null &&
            Object.hasOwnProperty.call(m, "proposalId")
          )
            w.uint32(8).uint64(m.proposalId);
          return w;
        };
        MsgSubmitProposalResponse.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.cosmos.gov.v1beta1.MsgSubmitProposalResponse();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.proposalId = r.uint64();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        MsgSubmitProposalResponse.fromObject = function fromObject(d) {
          if (d instanceof $root.cosmos.gov.v1beta1.MsgSubmitProposalResponse)
            return d;
          var m = new $root.cosmos.gov.v1beta1.MsgSubmitProposalResponse();
          if (d.proposalId != null) {
            if ($util.Long)
              (m.proposalId = $util.Long.fromValue(
                d.proposalId
              )).unsigned = true;
            else if (typeof d.proposalId === "string")
              m.proposalId = parseInt(d.proposalId, 10);
            else if (typeof d.proposalId === "number")
              m.proposalId = d.proposalId;
            else if (typeof d.proposalId === "object")
              m.proposalId = new $util.LongBits(
                d.proposalId.low >>> 0,
                d.proposalId.high >>> 0
              ).toNumber(true);
          }
          return m;
        };
        MsgSubmitProposalResponse.toObject = function toObject(m, o) {
          if (!o) o = {};
          var d = {};
          if (o.defaults) {
            if ($util.Long) {
              var n = new $util.Long(0, 0, true);
              d.proposalId =
                o.longs === String
                  ? n.toString()
                  : o.longs === Number
                  ? n.toNumber()
                  : n;
            } else d.proposalId = o.longs === String ? "0" : 0;
          }
          if (m.proposalId != null && m.hasOwnProperty("proposalId")) {
            if (typeof m.proposalId === "number")
              d.proposalId =
                o.longs === String ? String(m.proposalId) : m.proposalId;
            else
              d.proposalId =
                o.longs === String
                  ? $util.Long.prototype.toString.call(m.proposalId)
                  : o.longs === Number
                  ? new $util.LongBits(
                      m.proposalId.low >>> 0,
                      m.proposalId.high >>> 0
                    ).toNumber(true)
                  : m.proposalId;
          }
          return d;
        };
        MsgSubmitProposalResponse.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return MsgSubmitProposalResponse;
      })();
      v1beta1.MsgVote = (function () {
        function MsgVote(p) {
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        MsgVote.prototype.proposalId = $util.Long
          ? $util.Long.fromBits(0, 0, true)
          : 0;
        MsgVote.prototype.voter = "";
        MsgVote.prototype.option = 0;
        MsgVote.create = function create(properties) {
          return new MsgVote(properties);
        };
        MsgVote.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (
            m.proposalId != null &&
            Object.hasOwnProperty.call(m, "proposalId")
          )
            w.uint32(8).uint64(m.proposalId);
          if (m.voter != null && Object.hasOwnProperty.call(m, "voter"))
            w.uint32(18).string(m.voter);
          if (m.option != null && Object.hasOwnProperty.call(m, "option"))
            w.uint32(24).int32(m.option);
          return w;
        };
        MsgVote.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.cosmos.gov.v1beta1.MsgVote();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.proposalId = r.uint64();
                break;
              case 2:
                m.voter = r.string();
                break;
              case 3:
                m.option = r.int32();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        MsgVote.fromObject = function fromObject(d) {
          if (d instanceof $root.cosmos.gov.v1beta1.MsgVote) return d;
          var m = new $root.cosmos.gov.v1beta1.MsgVote();
          if (d.proposalId != null) {
            if ($util.Long)
              (m.proposalId = $util.Long.fromValue(
                d.proposalId
              )).unsigned = true;
            else if (typeof d.proposalId === "string")
              m.proposalId = parseInt(d.proposalId, 10);
            else if (typeof d.proposalId === "number")
              m.proposalId = d.proposalId;
            else if (typeof d.proposalId === "object")
              m.proposalId = new $util.LongBits(
                d.proposalId.low >>> 0,
                d.proposalId.high >>> 0
              ).toNumber(true);
          }
          if (d.voter != null) {
            m.voter = String(d.voter);
          }
          switch (d.option) {
            case "VOTE_OPTION_UNSPECIFIED":
            case 0:
              m.option = 0;
              break;
            case "VOTE_OPTION_YES":
            case 1:
              m.option = 1;
              break;
            case "VOTE_OPTION_ABSTAIN":
            case 2:
              m.option = 2;
              break;
            case "VOTE_OPTION_NO":
            case 3:
              m.option = 3;
              break;
            case "VOTE_OPTION_NO_WITH_VETO":
            case 4:
              m.option = 4;
              break;
          }
          return m;
        };
        MsgVote.toObject = function toObject(m, o) {
          if (!o) o = {};
          var d = {};
          if (o.defaults) {
            if ($util.Long) {
              var n = new $util.Long(0, 0, true);
              d.proposalId =
                o.longs === String
                  ? n.toString()
                  : o.longs === Number
                  ? n.toNumber()
                  : n;
            } else d.proposalId = o.longs === String ? "0" : 0;
            d.voter = "";
            d.option = o.enums === String ? "VOTE_OPTION_UNSPECIFIED" : 0;
          }
          if (m.proposalId != null && m.hasOwnProperty("proposalId")) {
            if (typeof m.proposalId === "number")
              d.proposalId =
                o.longs === String ? String(m.proposalId) : m.proposalId;
            else
              d.proposalId =
                o.longs === String
                  ? $util.Long.prototype.toString.call(m.proposalId)
                  : o.longs === Number
                  ? new $util.LongBits(
                      m.proposalId.low >>> 0,
                      m.proposalId.high >>> 0
                    ).toNumber(true)
                  : m.proposalId;
          }
          if (m.voter != null && m.hasOwnProperty("voter")) {
            d.voter = m.voter;
          }
          if (m.option != null && m.hasOwnProperty("option")) {
            d.option =
              o.enums === String
                ? $root.cosmos.gov.v1beta1.VoteOption[m.option]
                : m.option;
          }
          return d;
        };
        MsgVote.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return MsgVote;
      })();
      v1beta1.MsgVoteResponse = (function () {
        function MsgVoteResponse(p) {
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        MsgVoteResponse.create = function create(properties) {
          return new MsgVoteResponse(properties);
        };
        MsgVoteResponse.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          return w;
        };
        MsgVoteResponse.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.cosmos.gov.v1beta1.MsgVoteResponse();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        MsgVoteResponse.fromObject = function fromObject(d) {
          if (d instanceof $root.cosmos.gov.v1beta1.MsgVoteResponse) return d;
          return new $root.cosmos.gov.v1beta1.MsgVoteResponse();
        };
        MsgVoteResponse.toObject = function toObject() {
          return {};
        };
        MsgVoteResponse.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return MsgVoteResponse;
      })();
      v1beta1.MsgVoteWeighted = (function () {
        function MsgVoteWeighted(p) {
          this.options = [];
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        MsgVoteWeighted.prototype.proposalId = $util.Long
          ? $util.Long.fromBits(0, 0, true)
          : 0;
        MsgVoteWeighted.prototype.voter = "";
        MsgVoteWeighted.prototype.options = $util.emptyArray;
        MsgVoteWeighted.create = function create(properties) {
          return new MsgVoteWeighted(properties);
        };
        MsgVoteWeighted.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (
            m.proposalId != null &&
            Object.hasOwnProperty.call(m, "proposalId")
          )
            w.uint32(8).uint64(m.proposalId);
          if (m.voter != null && Object.hasOwnProperty.call(m, "voter"))
            w.uint32(18).string(m.voter);
          if (m.options != null && m.options.length) {
            for (var i = 0; i < m.options.length; ++i)
              $root.cosmos.gov.v1beta1.WeightedVoteOption.encode(
                m.options[i],
                w.uint32(26).fork()
              ).ldelim();
          }
          return w;
        };
        MsgVoteWeighted.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.cosmos.gov.v1beta1.MsgVoteWeighted();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.proposalId = r.uint64();
                break;
              case 2:
                m.voter = r.string();
                break;
              case 3:
                if (!(m.options && m.options.length)) m.options = [];
                m.options.push(
                  $root.cosmos.gov.v1beta1.WeightedVoteOption.decode(
                    r,
                    r.uint32()
                  )
                );
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        MsgVoteWeighted.fromObject = function fromObject(d) {
          if (d instanceof $root.cosmos.gov.v1beta1.MsgVoteWeighted) return d;
          var m = new $root.cosmos.gov.v1beta1.MsgVoteWeighted();
          if (d.proposalId != null) {
            if ($util.Long)
              (m.proposalId = $util.Long.fromValue(
                d.proposalId
              )).unsigned = true;
            else if (typeof d.proposalId === "string")
              m.proposalId = parseInt(d.proposalId, 10);
            else if (typeof d.proposalId === "number")
              m.proposalId = d.proposalId;
            else if (typeof d.proposalId === "object")
              m.proposalId = new $util.LongBits(
                d.proposalId.low >>> 0,
                d.proposalId.high >>> 0
              ).toNumber(true);
          }
          if (d.voter != null) {
            m.voter = String(d.voter);
          }
          if (d.options) {
            if (!Array.isArray(d.options))
              throw TypeError(
                ".cosmos.gov.v1beta1.MsgVoteWeighted.options: array expected"
              );
            m.options = [];
            for (var i = 0; i < d.options.length; ++i) {
              if (typeof d.options[i] !== "object")
                throw TypeError(
                  ".cosmos.gov.v1beta1.MsgVoteWeighted.options: object expected"
                );
              m.options[i] =
                $root.cosmos.gov.v1beta1.WeightedVoteOption.fromObject(
                  d.options[i]
                );
            }
          }
          return m;
        };
        MsgVoteWeighted.toObject = function toObject(m, o) {
          if (!o) o = {};
          var d = {};
          if (o.arrays || o.defaults) {
            d.options = [];
          }
          if (o.defaults) {
            if ($util.Long) {
              var n = new $util.Long(0, 0, true);
              d.proposalId =
                o.longs === String
                  ? n.toString()
                  : o.longs === Number
                  ? n.toNumber()
                  : n;
            } else d.proposalId = o.longs === String ? "0" : 0;
            d.voter = "";
          }
          if (m.proposalId != null && m.hasOwnProperty("proposalId")) {
            if (typeof m.proposalId === "number")
              d.proposalId =
                o.longs === String ? String(m.proposalId) : m.proposalId;
            else
              d.proposalId =
                o.longs === String
                  ? $util.Long.prototype.toString.call(m.proposalId)
                  : o.longs === Number
                  ? new $util.LongBits(
                      m.proposalId.low >>> 0,
                      m.proposalId.high >>> 0
                    ).toNumber(true)
                  : m.proposalId;
          }
          if (m.voter != null && m.hasOwnProperty("voter")) {
            d.voter = m.voter;
          }
          if (m.options && m.options.length) {
            d.options = [];
            for (var j = 0; j < m.options.length; ++j) {
              d.options[j] =
                $root.cosmos.gov.v1beta1.WeightedVoteOption.toObject(
                  m.options[j],
                  o
                );
            }
          }
          return d;
        };
        MsgVoteWeighted.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return MsgVoteWeighted;
      })();
      v1beta1.MsgVoteWeightedResponse = (function () {
        function MsgVoteWeightedResponse(p) {
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        MsgVoteWeightedResponse.create = function create(properties) {
          return new MsgVoteWeightedResponse(properties);
        };
        MsgVoteWeightedResponse.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          return w;
        };
        MsgVoteWeightedResponse.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.cosmos.gov.v1beta1.MsgVoteWeightedResponse();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        MsgVoteWeightedResponse.fromObject = function fromObject(d) {
          if (d instanceof $root.cosmos.gov.v1beta1.MsgVoteWeightedResponse)
            return d;
          return new $root.cosmos.gov.v1beta1.MsgVoteWeightedResponse();
        };
        MsgVoteWeightedResponse.toObject = function toObject() {
          return {};
        };
        MsgVoteWeightedResponse.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return MsgVoteWeightedResponse;
      })();
      v1beta1.MsgDeposit = (function () {
        function MsgDeposit(p) {
          this.amount = [];
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        MsgDeposit.prototype.proposalId = $util.Long
          ? $util.Long.fromBits(0, 0, true)
          : 0;
        MsgDeposit.prototype.depositor = "";
        MsgDeposit.prototype.amount = $util.emptyArray;
        MsgDeposit.create = function create(properties) {
          return new MsgDeposit(properties);
        };
        MsgDeposit.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (
            m.proposalId != null &&
            Object.hasOwnProperty.call(m, "proposalId")
          )
            w.uint32(8).uint64(m.proposalId);
          if (m.depositor != null && Object.hasOwnProperty.call(m, "depositor"))
            w.uint32(18).string(m.depositor);
          if (m.amount != null && m.amount.length) {
            for (var i = 0; i < m.amount.length; ++i)
              $root.cosmos.base.v1beta1.Coin.encode(
                m.amount[i],
                w.uint32(26).fork()
              ).ldelim();
          }
          return w;
        };
        MsgDeposit.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.cosmos.gov.v1beta1.MsgDeposit();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.proposalId = r.uint64();
                break;
              case 2:
                m.depositor = r.string();
                break;
              case 3:
                if (!(m.amount && m.amount.length)) m.amount = [];
                m.amount.push(
                  $root.cosmos.base.v1beta1.Coin.decode(r, r.uint32())
                );
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        MsgDeposit.fromObject = function fromObject(d) {
          if (d instanceof $root.cosmos.gov.v1beta1.MsgDeposit) return d;
          var m = new $root.cosmos.gov.v1beta1.MsgDeposit();
          if (d.proposalId != null) {
            if ($util.Long)
              (m.proposalId = $util.Long.fromValue(
                d.proposalId
              )).unsigned = true;
            else if (typeof d.proposalId === "string")
              m.proposalId = parseInt(d.proposalId, 10);
            else if (typeof d.proposalId === "number")
              m.proposalId = d.proposalId;
            else if (typeof d.proposalId === "object")
              m.proposalId = new $util.LongBits(
                d.proposalId.low >>> 0,
                d.proposalId.high >>> 0
              ).toNumber(true);
          }
          if (d.depositor != null) {
            m.depositor = String(d.depositor);
          }
          if (d.amount) {
            if (!Array.isArray(d.amount))
              throw TypeError(
                ".cosmos.gov.v1beta1.MsgDeposit.amount: array expected"
              );
            m.amount = [];
            for (var i = 0; i < d.amount.length; ++i) {
              if (typeof d.amount[i] !== "object")
                throw TypeError(
                  ".cosmos.gov.v1beta1.MsgDeposit.amount: object expected"
                );
              m.amount[i] = $root.cosmos.base.v1beta1.Coin.fromObject(
                d.amount[i]
              );
            }
          }
          return m;
        };
        MsgDeposit.toObject = function toObject(m, o) {
          if (!o) o = {};
          var d = {};
          if (o.arrays || o.defaults) {
            d.amount = [];
          }
          if (o.defaults) {
            if ($util.Long) {
              var n = new $util.Long(0, 0, true);
              d.proposalId =
                o.longs === String
                  ? n.toString()
                  : o.longs === Number
                  ? n.toNumber()
                  : n;
            } else d.proposalId = o.longs === String ? "0" : 0;
            d.depositor = "";
          }
          if (m.proposalId != null && m.hasOwnProperty("proposalId")) {
            if (typeof m.proposalId === "number")
              d.proposalId =
                o.longs === String ? String(m.proposalId) : m.proposalId;
            else
              d.proposalId =
                o.longs === String
                  ? $util.Long.prototype.toString.call(m.proposalId)
                  : o.longs === Number
                  ? new $util.LongBits(
                      m.proposalId.low >>> 0,
                      m.proposalId.high >>> 0
                    ).toNumber(true)
                  : m.proposalId;
          }
          if (m.depositor != null && m.hasOwnProperty("depositor")) {
            d.depositor = m.depositor;
          }
          if (m.amount && m.amount.length) {
            d.amount = [];
            for (var j = 0; j < m.amount.length; ++j) {
              d.amount[j] = $root.cosmos.base.v1beta1.Coin.toObject(
                m.amount[j],
                o
              );
            }
          }
          return d;
        };
        MsgDeposit.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return MsgDeposit;
      })();
      v1beta1.MsgDepositResponse = (function () {
        function MsgDepositResponse(p) {
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        MsgDepositResponse.create = function create(properties) {
          return new MsgDepositResponse(properties);
        };
        MsgDepositResponse.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          return w;
        };
        MsgDepositResponse.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.cosmos.gov.v1beta1.MsgDepositResponse();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        MsgDepositResponse.fromObject = function fromObject(d) {
          if (d instanceof $root.cosmos.gov.v1beta1.MsgDepositResponse)
            return d;
          return new $root.cosmos.gov.v1beta1.MsgDepositResponse();
        };
        MsgDepositResponse.toObject = function toObject() {
          return {};
        };
        MsgDepositResponse.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return MsgDepositResponse;
      })();
      return v1beta1;
    })();
    return gov;
  })();
  return cosmos;
})();
exports.google = $root.google = (() => {
  const google = {};
  google.protobuf = (function () {
    const protobuf = {};
    protobuf.Timestamp = (function () {
      function Timestamp(p) {
        if (p)
          for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Timestamp.prototype.seconds = $util.Long
        ? $util.Long.fromBits(0, 0, false)
        : 0;
      Timestamp.prototype.nanos = 0;
      Timestamp.create = function create(properties) {
        return new Timestamp(properties);
      };
      Timestamp.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.seconds != null && Object.hasOwnProperty.call(m, "seconds"))
          w.uint32(8).int64(m.seconds);
        if (m.nanos != null && Object.hasOwnProperty.call(m, "nanos"))
          w.uint32(16).int32(m.nanos);
        return w;
      };
      Timestamp.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l,
          m = new $root.google.protobuf.Timestamp();
        while (r.pos < c) {
          var t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.seconds = r.int64();
              break;
            case 2:
              m.nanos = r.int32();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      Timestamp.fromObject = function fromObject(d) {
        if (d instanceof $root.google.protobuf.Timestamp) return d;
        var m = new $root.google.protobuf.Timestamp();
        if (d.seconds != null) {
          if ($util.Long)
            (m.seconds = $util.Long.fromValue(d.seconds)).unsigned = false;
          else if (typeof d.seconds === "string")
            m.seconds = parseInt(d.seconds, 10);
          else if (typeof d.seconds === "number") m.seconds = d.seconds;
          else if (typeof d.seconds === "object")
            m.seconds = new $util.LongBits(
              d.seconds.low >>> 0,
              d.seconds.high >>> 0
            ).toNumber();
        }
        if (d.nanos != null) {
          m.nanos = d.nanos | 0;
        }
        return m;
      };
      Timestamp.toObject = function toObject(m, o) {
        if (!o) o = {};
        var d = {};
        if (o.defaults) {
          if ($util.Long) {
            var n = new $util.Long(0, 0, false);
            d.seconds =
              o.longs === String
                ? n.toString()
                : o.longs === Number
                ? n.toNumber()
                : n;
          } else d.seconds = o.longs === String ? "0" : 0;
          d.nanos = 0;
        }
        if (m.seconds != null && m.hasOwnProperty("seconds")) {
          if (typeof m.seconds === "number")
            d.seconds = o.longs === String ? String(m.seconds) : m.seconds;
          else
            d.seconds =
              o.longs === String
                ? $util.Long.prototype.toString.call(m.seconds)
                : o.longs === Number
                ? new $util.LongBits(
                    m.seconds.low >>> 0,
                    m.seconds.high >>> 0
                  ).toNumber()
                : m.seconds;
        }
        if (m.nanos != null && m.hasOwnProperty("nanos")) {
          d.nanos = m.nanos;
        }
        return d;
      };
      Timestamp.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };
      return Timestamp;
    })();
    protobuf.Any = (function () {
      function Any(p) {
        if (p)
          for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Any.prototype.type_url = "";
      Any.prototype.value = $util.newBuffer([]);
      Any.create = function create(properties) {
        return new Any(properties);
      };
      Any.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.type_url != null && Object.hasOwnProperty.call(m, "type_url"))
          w.uint32(10).string(m.type_url);
        if (m.value != null && Object.hasOwnProperty.call(m, "value"))
          w.uint32(18).bytes(m.value);
        return w;
      };
      Any.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l,
          m = new $root.google.protobuf.Any();
        while (r.pos < c) {
          var t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.type_url = r.string();
              break;
            case 2:
              m.value = r.bytes();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      Any.fromObject = function fromObject(d) {
        if (d instanceof $root.google.protobuf.Any) return d;
        var m = new $root.google.protobuf.Any();
        if (d.type_url != null) {
          m.type_url = String(d.type_url);
        }
        if (d.value != null) {
          if (typeof d.value === "string")
            $util.base64.decode(
              d.value,
              (m.value = $util.newBuffer($util.base64.length(d.value))),
              0
            );
          else if (d.value.length) m.value = d.value;
        }
        return m;
      };
      Any.toObject = function toObject(m, o) {
        if (!o) o = {};
        var d = {};
        if (o.defaults) {
          d.type_url = "";
          if (o.bytes === String) d.value = "";
          else {
            d.value = [];
            if (o.bytes !== Array) d.value = $util.newBuffer(d.value);
          }
        }
        if (m.type_url != null && m.hasOwnProperty("type_url")) {
          d.type_url = m.type_url;
        }
        if (m.value != null && m.hasOwnProperty("value")) {
          d.value =
            o.bytes === String
              ? $util.base64.encode(m.value, 0, m.value.length)
              : o.bytes === Array
              ? Array.prototype.slice.call(m.value)
              : m.value;
        }
        return d;
      };
      Any.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };
      return Any;
    })();
    protobuf.Duration = (function () {
      function Duration(p) {
        if (p)
          for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Duration.prototype.seconds = $util.Long
        ? $util.Long.fromBits(0, 0, false)
        : 0;
      Duration.prototype.nanos = 0;
      Duration.create = function create(properties) {
        return new Duration(properties);
      };
      Duration.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.seconds != null && Object.hasOwnProperty.call(m, "seconds"))
          w.uint32(8).int64(m.seconds);
        if (m.nanos != null && Object.hasOwnProperty.call(m, "nanos"))
          w.uint32(16).int32(m.nanos);
        return w;
      };
      Duration.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l,
          m = new $root.google.protobuf.Duration();
        while (r.pos < c) {
          var t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.seconds = r.int64();
              break;
            case 2:
              m.nanos = r.int32();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      Duration.fromObject = function fromObject(d) {
        if (d instanceof $root.google.protobuf.Duration) return d;
        var m = new $root.google.protobuf.Duration();
        if (d.seconds != null) {
          if ($util.Long)
            (m.seconds = $util.Long.fromValue(d.seconds)).unsigned = false;
          else if (typeof d.seconds === "string")
            m.seconds = parseInt(d.seconds, 10);
          else if (typeof d.seconds === "number") m.seconds = d.seconds;
          else if (typeof d.seconds === "object")
            m.seconds = new $util.LongBits(
              d.seconds.low >>> 0,
              d.seconds.high >>> 0
            ).toNumber();
        }
        if (d.nanos != null) {
          m.nanos = d.nanos | 0;
        }
        return m;
      };
      Duration.toObject = function toObject(m, o) {
        if (!o) o = {};
        var d = {};
        if (o.defaults) {
          if ($util.Long) {
            var n = new $util.Long(0, 0, false);
            d.seconds =
              o.longs === String
                ? n.toString()
                : o.longs === Number
                ? n.toNumber()
                : n;
          } else d.seconds = o.longs === String ? "0" : 0;
          d.nanos = 0;
        }
        if (m.seconds != null && m.hasOwnProperty("seconds")) {
          if (typeof m.seconds === "number")
            d.seconds = o.longs === String ? String(m.seconds) : m.seconds;
          else
            d.seconds =
              o.longs === String
                ? $util.Long.prototype.toString.call(m.seconds)
                : o.longs === Number
                ? new $util.LongBits(
                    m.seconds.low >>> 0,
                    m.seconds.high >>> 0
                  ).toNumber()
                : m.seconds;
        }
        if (m.nanos != null && m.hasOwnProperty("nanos")) {
          d.nanos = m.nanos;
        }
        return d;
      };
      Duration.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };
      return Duration;
    })();
    return protobuf;
  })();
  return google;
})();
exports.osmosis = $root.osmosis = (() => {
  const osmosis = {};
  osmosis.superfluid = (function () {
    const superfluid = {};
    superfluid.Msg = (function () {
      function Msg(rpcImpl, requestDelimited, responseDelimited) {
        $protobuf.rpc.Service.call(
          this,
          rpcImpl,
          requestDelimited,
          responseDelimited
        );
      }
      (Msg.prototype = Object.create(
        $protobuf.rpc.Service.prototype
      )).constructor = Msg;
      Msg.create = function create(
        rpcImpl,
        requestDelimited,
        responseDelimited
      ) {
        return new this(rpcImpl, requestDelimited, responseDelimited);
      };
      Object.defineProperty(
        (Msg.prototype.superfluidDelegate = function superfluidDelegate(
          request,
          callback
        ) {
          return this.rpcCall(
            superfluidDelegate,
            $root.osmosis.superfluid.MsgSuperfluidDelegate,
            $root.osmosis.superfluid.MsgSuperfluidDelegateResponse,
            request,
            callback
          );
        }),
        "name",
        { value: "SuperfluidDelegate" }
      );
      Object.defineProperty(
        (Msg.prototype.superfluidUndelegate = function superfluidUndelegate(
          request,
          callback
        ) {
          return this.rpcCall(
            superfluidUndelegate,
            $root.osmosis.superfluid.MsgSuperfluidUndelegate,
            $root.osmosis.superfluid.MsgSuperfluidUndelegateResponse,
            request,
            callback
          );
        }),
        "name",
        { value: "SuperfluidUndelegate" }
      );
      Object.defineProperty(
        (Msg.prototype.superfluidUnbondLock = function superfluidUnbondLock(
          request,
          callback
        ) {
          return this.rpcCall(
            superfluidUnbondLock,
            $root.osmosis.superfluid.MsgSuperfluidUnbondLock,
            $root.osmosis.superfluid.MsgSuperfluidUnbondLockResponse,
            request,
            callback
          );
        }),
        "name",
        { value: "SuperfluidUnbondLock" }
      );
      Object.defineProperty(
        (Msg.prototype.superfluidUndelegateAndUnbondLock =
          function superfluidUndelegateAndUnbondLock(request, callback) {
            return this.rpcCall(
              superfluidUndelegateAndUnbondLock,
              $root.osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock,
              $root.osmosis.superfluid
                .MsgSuperfluidUndelegateAndUnbondLockResponse,
              request,
              callback
            );
          }),
        "name",
        { value: "SuperfluidUndelegateAndUnbondLock" }
      );
      Object.defineProperty(
        (Msg.prototype.lockAndSuperfluidDelegate =
          function lockAndSuperfluidDelegate(request, callback) {
            return this.rpcCall(
              lockAndSuperfluidDelegate,
              $root.osmosis.superfluid.MsgLockAndSuperfluidDelegate,
              $root.osmosis.superfluid.MsgLockAndSuperfluidDelegateResponse,
              request,
              callback
            );
          }),
        "name",
        { value: "LockAndSuperfluidDelegate" }
      );
      Object.defineProperty(
        (Msg.prototype.createFullRangePositionAndSuperfluidDelegate =
          function createFullRangePositionAndSuperfluidDelegate(
            request,
            callback
          ) {
            return this.rpcCall(
              createFullRangePositionAndSuperfluidDelegate,
              $root.osmosis.superfluid
                .MsgCreateFullRangePositionAndSuperfluidDelegate,
              $root.osmosis.superfluid
                .MsgCreateFullRangePositionAndSuperfluidDelegateResponse,
              request,
              callback
            );
          }),
        "name",
        { value: "CreateFullRangePositionAndSuperfluidDelegate" }
      );
      Object.defineProperty(
        (Msg.prototype.unPoolWhitelistedPool = function unPoolWhitelistedPool(
          request,
          callback
        ) {
          return this.rpcCall(
            unPoolWhitelistedPool,
            $root.osmosis.superfluid.MsgUnPoolWhitelistedPool,
            $root.osmosis.superfluid.MsgUnPoolWhitelistedPoolResponse,
            request,
            callback
          );
        }),
        "name",
        { value: "UnPoolWhitelistedPool" }
      );
      Object.defineProperty(
        (Msg.prototype.unlockAndMigrateSharesToFullRangeConcentratedPosition =
          function unlockAndMigrateSharesToFullRangeConcentratedPosition(
            request,
            callback
          ) {
            return this.rpcCall(
              unlockAndMigrateSharesToFullRangeConcentratedPosition,
              $root.osmosis.superfluid
                .MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition,
              $root.osmosis.superfluid
                .MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse,
              request,
              callback
            );
          }),
        "name",
        { value: "UnlockAndMigrateSharesToFullRangeConcentratedPosition" }
      );
      Object.defineProperty(
        (Msg.prototype.addToConcentratedLiquiditySuperfluidPosition =
          function addToConcentratedLiquiditySuperfluidPosition(
            request,
            callback
          ) {
            return this.rpcCall(
              addToConcentratedLiquiditySuperfluidPosition,
              $root.osmosis.superfluid
                .MsgAddToConcentratedLiquiditySuperfluidPosition,
              $root.osmosis.superfluid
                .MsgAddToConcentratedLiquiditySuperfluidPositionResponse,
              request,
              callback
            );
          }),
        "name",
        { value: "AddToConcentratedLiquiditySuperfluidPosition" }
      );
      return Msg;
    })();
    superfluid.MsgSuperfluidDelegate = (function () {
      function MsgSuperfluidDelegate(p) {
        if (p)
          for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      MsgSuperfluidDelegate.prototype.sender = "";
      MsgSuperfluidDelegate.prototype.lockId = $util.Long
        ? $util.Long.fromBits(0, 0, true)
        : 0;
      MsgSuperfluidDelegate.prototype.valAddr = "";
      MsgSuperfluidDelegate.create = function create(properties) {
        return new MsgSuperfluidDelegate(properties);
      };
      MsgSuperfluidDelegate.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.sender != null && Object.hasOwnProperty.call(m, "sender"))
          w.uint32(10).string(m.sender);
        if (m.lockId != null && Object.hasOwnProperty.call(m, "lockId"))
          w.uint32(16).uint64(m.lockId);
        if (m.valAddr != null && Object.hasOwnProperty.call(m, "valAddr"))
          w.uint32(26).string(m.valAddr);
        return w;
      };
      MsgSuperfluidDelegate.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l,
          m = new $root.osmosis.superfluid.MsgSuperfluidDelegate();
        while (r.pos < c) {
          var t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.sender = r.string();
              break;
            case 2:
              m.lockId = r.uint64();
              break;
            case 3:
              m.valAddr = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      MsgSuperfluidDelegate.fromObject = function fromObject(d) {
        if (d instanceof $root.osmosis.superfluid.MsgSuperfluidDelegate)
          return d;
        var m = new $root.osmosis.superfluid.MsgSuperfluidDelegate();
        if (d.sender != null) {
          m.sender = String(d.sender);
        }
        if (d.lockId != null) {
          if ($util.Long)
            (m.lockId = $util.Long.fromValue(d.lockId)).unsigned = true;
          else if (typeof d.lockId === "string")
            m.lockId = parseInt(d.lockId, 10);
          else if (typeof d.lockId === "number") m.lockId = d.lockId;
          else if (typeof d.lockId === "object")
            m.lockId = new $util.LongBits(
              d.lockId.low >>> 0,
              d.lockId.high >>> 0
            ).toNumber(true);
        }
        if (d.valAddr != null) {
          m.valAddr = String(d.valAddr);
        }
        return m;
      };
      MsgSuperfluidDelegate.toObject = function toObject(m, o) {
        if (!o) o = {};
        var d = {};
        if (o.defaults) {
          d.sender = "";
          if ($util.Long) {
            var n = new $util.Long(0, 0, true);
            d.lockId =
              o.longs === String
                ? n.toString()
                : o.longs === Number
                ? n.toNumber()
                : n;
          } else d.lockId = o.longs === String ? "0" : 0;
          d.valAddr = "";
        }
        if (m.sender != null && m.hasOwnProperty("sender")) {
          d.sender = m.sender;
        }
        if (m.lockId != null && m.hasOwnProperty("lockId")) {
          if (typeof m.lockId === "number")
            d.lockId = o.longs === String ? String(m.lockId) : m.lockId;
          else
            d.lockId =
              o.longs === String
                ? $util.Long.prototype.toString.call(m.lockId)
                : o.longs === Number
                ? new $util.LongBits(
                    m.lockId.low >>> 0,
                    m.lockId.high >>> 0
                  ).toNumber(true)
                : m.lockId;
        }
        if (m.valAddr != null && m.hasOwnProperty("valAddr")) {
          d.valAddr = m.valAddr;
        }
        return d;
      };
      MsgSuperfluidDelegate.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };
      return MsgSuperfluidDelegate;
    })();
    superfluid.MsgSuperfluidDelegateResponse = (function () {
      function MsgSuperfluidDelegateResponse(p) {
        if (p)
          for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      MsgSuperfluidDelegateResponse.create = function create(properties) {
        return new MsgSuperfluidDelegateResponse(properties);
      };
      MsgSuperfluidDelegateResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        return w;
      };
      MsgSuperfluidDelegateResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l,
          m = new $root.osmosis.superfluid.MsgSuperfluidDelegateResponse();
        while (r.pos < c) {
          var t = r.uint32();
          switch (t >>> 3) {
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      MsgSuperfluidDelegateResponse.fromObject = function fromObject(d) {
        if (d instanceof $root.osmosis.superfluid.MsgSuperfluidDelegateResponse)
          return d;
        return new $root.osmosis.superfluid.MsgSuperfluidDelegateResponse();
      };
      MsgSuperfluidDelegateResponse.toObject = function toObject() {
        return {};
      };
      MsgSuperfluidDelegateResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };
      return MsgSuperfluidDelegateResponse;
    })();
    superfluid.MsgSuperfluidUndelegate = (function () {
      function MsgSuperfluidUndelegate(p) {
        if (p)
          for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      MsgSuperfluidUndelegate.prototype.sender = "";
      MsgSuperfluidUndelegate.prototype.lockId = $util.Long
        ? $util.Long.fromBits(0, 0, true)
        : 0;
      MsgSuperfluidUndelegate.create = function create(properties) {
        return new MsgSuperfluidUndelegate(properties);
      };
      MsgSuperfluidUndelegate.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.sender != null && Object.hasOwnProperty.call(m, "sender"))
          w.uint32(10).string(m.sender);
        if (m.lockId != null && Object.hasOwnProperty.call(m, "lockId"))
          w.uint32(16).uint64(m.lockId);
        return w;
      };
      MsgSuperfluidUndelegate.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l,
          m = new $root.osmosis.superfluid.MsgSuperfluidUndelegate();
        while (r.pos < c) {
          var t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.sender = r.string();
              break;
            case 2:
              m.lockId = r.uint64();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      MsgSuperfluidUndelegate.fromObject = function fromObject(d) {
        if (d instanceof $root.osmosis.superfluid.MsgSuperfluidUndelegate)
          return d;
        var m = new $root.osmosis.superfluid.MsgSuperfluidUndelegate();
        if (d.sender != null) {
          m.sender = String(d.sender);
        }
        if (d.lockId != null) {
          if ($util.Long)
            (m.lockId = $util.Long.fromValue(d.lockId)).unsigned = true;
          else if (typeof d.lockId === "string")
            m.lockId = parseInt(d.lockId, 10);
          else if (typeof d.lockId === "number") m.lockId = d.lockId;
          else if (typeof d.lockId === "object")
            m.lockId = new $util.LongBits(
              d.lockId.low >>> 0,
              d.lockId.high >>> 0
            ).toNumber(true);
        }
        return m;
      };
      MsgSuperfluidUndelegate.toObject = function toObject(m, o) {
        if (!o) o = {};
        var d = {};
        if (o.defaults) {
          d.sender = "";
          if ($util.Long) {
            var n = new $util.Long(0, 0, true);
            d.lockId =
              o.longs === String
                ? n.toString()
                : o.longs === Number
                ? n.toNumber()
                : n;
          } else d.lockId = o.longs === String ? "0" : 0;
        }
        if (m.sender != null && m.hasOwnProperty("sender")) {
          d.sender = m.sender;
        }
        if (m.lockId != null && m.hasOwnProperty("lockId")) {
          if (typeof m.lockId === "number")
            d.lockId = o.longs === String ? String(m.lockId) : m.lockId;
          else
            d.lockId =
              o.longs === String
                ? $util.Long.prototype.toString.call(m.lockId)
                : o.longs === Number
                ? new $util.LongBits(
                    m.lockId.low >>> 0,
                    m.lockId.high >>> 0
                  ).toNumber(true)
                : m.lockId;
        }
        return d;
      };
      MsgSuperfluidUndelegate.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };
      return MsgSuperfluidUndelegate;
    })();
    superfluid.MsgSuperfluidUndelegateResponse = (function () {
      function MsgSuperfluidUndelegateResponse(p) {
        if (p)
          for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      MsgSuperfluidUndelegateResponse.create = function create(properties) {
        return new MsgSuperfluidUndelegateResponse(properties);
      };
      MsgSuperfluidUndelegateResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        return w;
      };
      MsgSuperfluidUndelegateResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l,
          m = new $root.osmosis.superfluid.MsgSuperfluidUndelegateResponse();
        while (r.pos < c) {
          var t = r.uint32();
          switch (t >>> 3) {
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      MsgSuperfluidUndelegateResponse.fromObject = function fromObject(d) {
        if (
          d instanceof $root.osmosis.superfluid.MsgSuperfluidUndelegateResponse
        )
          return d;
        return new $root.osmosis.superfluid.MsgSuperfluidUndelegateResponse();
      };
      MsgSuperfluidUndelegateResponse.toObject = function toObject() {
        return {};
      };
      MsgSuperfluidUndelegateResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };
      return MsgSuperfluidUndelegateResponse;
    })();
    superfluid.MsgSuperfluidUnbondLock = (function () {
      function MsgSuperfluidUnbondLock(p) {
        if (p)
          for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      MsgSuperfluidUnbondLock.prototype.sender = "";
      MsgSuperfluidUnbondLock.prototype.lockId = $util.Long
        ? $util.Long.fromBits(0, 0, true)
        : 0;
      MsgSuperfluidUnbondLock.create = function create(properties) {
        return new MsgSuperfluidUnbondLock(properties);
      };
      MsgSuperfluidUnbondLock.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.sender != null && Object.hasOwnProperty.call(m, "sender"))
          w.uint32(10).string(m.sender);
        if (m.lockId != null && Object.hasOwnProperty.call(m, "lockId"))
          w.uint32(16).uint64(m.lockId);
        return w;
      };
      MsgSuperfluidUnbondLock.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l,
          m = new $root.osmosis.superfluid.MsgSuperfluidUnbondLock();
        while (r.pos < c) {
          var t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.sender = r.string();
              break;
            case 2:
              m.lockId = r.uint64();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      MsgSuperfluidUnbondLock.fromObject = function fromObject(d) {
        if (d instanceof $root.osmosis.superfluid.MsgSuperfluidUnbondLock)
          return d;
        var m = new $root.osmosis.superfluid.MsgSuperfluidUnbondLock();
        if (d.sender != null) {
          m.sender = String(d.sender);
        }
        if (d.lockId != null) {
          if ($util.Long)
            (m.lockId = $util.Long.fromValue(d.lockId)).unsigned = true;
          else if (typeof d.lockId === "string")
            m.lockId = parseInt(d.lockId, 10);
          else if (typeof d.lockId === "number") m.lockId = d.lockId;
          else if (typeof d.lockId === "object")
            m.lockId = new $util.LongBits(
              d.lockId.low >>> 0,
              d.lockId.high >>> 0
            ).toNumber(true);
        }
        return m;
      };
      MsgSuperfluidUnbondLock.toObject = function toObject(m, o) {
        if (!o) o = {};
        var d = {};
        if (o.defaults) {
          d.sender = "";
          if ($util.Long) {
            var n = new $util.Long(0, 0, true);
            d.lockId =
              o.longs === String
                ? n.toString()
                : o.longs === Number
                ? n.toNumber()
                : n;
          } else d.lockId = o.longs === String ? "0" : 0;
        }
        if (m.sender != null && m.hasOwnProperty("sender")) {
          d.sender = m.sender;
        }
        if (m.lockId != null && m.hasOwnProperty("lockId")) {
          if (typeof m.lockId === "number")
            d.lockId = o.longs === String ? String(m.lockId) : m.lockId;
          else
            d.lockId =
              o.longs === String
                ? $util.Long.prototype.toString.call(m.lockId)
                : o.longs === Number
                ? new $util.LongBits(
                    m.lockId.low >>> 0,
                    m.lockId.high >>> 0
                  ).toNumber(true)
                : m.lockId;
        }
        return d;
      };
      MsgSuperfluidUnbondLock.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };
      return MsgSuperfluidUnbondLock;
    })();
    superfluid.MsgSuperfluidUnbondLockResponse = (function () {
      function MsgSuperfluidUnbondLockResponse(p) {
        if (p)
          for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      MsgSuperfluidUnbondLockResponse.create = function create(properties) {
        return new MsgSuperfluidUnbondLockResponse(properties);
      };
      MsgSuperfluidUnbondLockResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        return w;
      };
      MsgSuperfluidUnbondLockResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l,
          m = new $root.osmosis.superfluid.MsgSuperfluidUnbondLockResponse();
        while (r.pos < c) {
          var t = r.uint32();
          switch (t >>> 3) {
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      MsgSuperfluidUnbondLockResponse.fromObject = function fromObject(d) {
        if (
          d instanceof $root.osmosis.superfluid.MsgSuperfluidUnbondLockResponse
        )
          return d;
        return new $root.osmosis.superfluid.MsgSuperfluidUnbondLockResponse();
      };
      MsgSuperfluidUnbondLockResponse.toObject = function toObject() {
        return {};
      };
      MsgSuperfluidUnbondLockResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };
      return MsgSuperfluidUnbondLockResponse;
    })();
    superfluid.MsgSuperfluidUndelegateAndUnbondLock = (function () {
      function MsgSuperfluidUndelegateAndUnbondLock(p) {
        if (p)
          for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      MsgSuperfluidUndelegateAndUnbondLock.prototype.sender = "";
      MsgSuperfluidUndelegateAndUnbondLock.prototype.lockId = $util.Long
        ? $util.Long.fromBits(0, 0, true)
        : 0;
      MsgSuperfluidUndelegateAndUnbondLock.prototype.coin = null;
      MsgSuperfluidUndelegateAndUnbondLock.create = function create(
        properties
      ) {
        return new MsgSuperfluidUndelegateAndUnbondLock(properties);
      };
      MsgSuperfluidUndelegateAndUnbondLock.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.sender != null && Object.hasOwnProperty.call(m, "sender"))
          w.uint32(10).string(m.sender);
        if (m.lockId != null && Object.hasOwnProperty.call(m, "lockId"))
          w.uint32(16).uint64(m.lockId);
        if (m.coin != null && Object.hasOwnProperty.call(m, "coin"))
          $root.cosmos.base.v1beta1.Coin.encode(
            m.coin,
            w.uint32(26).fork()
          ).ldelim();
        return w;
      };
      MsgSuperfluidUndelegateAndUnbondLock.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l,
          m =
            new $root.osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock();
        while (r.pos < c) {
          var t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.sender = r.string();
              break;
            case 2:
              m.lockId = r.uint64();
              break;
            case 3:
              m.coin = $root.cosmos.base.v1beta1.Coin.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      MsgSuperfluidUndelegateAndUnbondLock.fromObject = function fromObject(d) {
        if (
          d instanceof
          $root.osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock
        )
          return d;
        var m =
          new $root.osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock();
        if (d.sender != null) {
          m.sender = String(d.sender);
        }
        if (d.lockId != null) {
          if ($util.Long)
            (m.lockId = $util.Long.fromValue(d.lockId)).unsigned = true;
          else if (typeof d.lockId === "string")
            m.lockId = parseInt(d.lockId, 10);
          else if (typeof d.lockId === "number") m.lockId = d.lockId;
          else if (typeof d.lockId === "object")
            m.lockId = new $util.LongBits(
              d.lockId.low >>> 0,
              d.lockId.high >>> 0
            ).toNumber(true);
        }
        if (d.coin != null) {
          if (typeof d.coin !== "object")
            throw TypeError(
              ".osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock.coin: object expected"
            );
          m.coin = $root.cosmos.base.v1beta1.Coin.fromObject(d.coin);
        }
        return m;
      };
      MsgSuperfluidUndelegateAndUnbondLock.toObject = function toObject(m, o) {
        if (!o) o = {};
        var d = {};
        if (o.defaults) {
          d.sender = "";
          if ($util.Long) {
            var n = new $util.Long(0, 0, true);
            d.lockId =
              o.longs === String
                ? n.toString()
                : o.longs === Number
                ? n.toNumber()
                : n;
          } else d.lockId = o.longs === String ? "0" : 0;
          d.coin = null;
        }
        if (m.sender != null && m.hasOwnProperty("sender")) {
          d.sender = m.sender;
        }
        if (m.lockId != null && m.hasOwnProperty("lockId")) {
          if (typeof m.lockId === "number")
            d.lockId = o.longs === String ? String(m.lockId) : m.lockId;
          else
            d.lockId =
              o.longs === String
                ? $util.Long.prototype.toString.call(m.lockId)
                : o.longs === Number
                ? new $util.LongBits(
                    m.lockId.low >>> 0,
                    m.lockId.high >>> 0
                  ).toNumber(true)
                : m.lockId;
        }
        if (m.coin != null && m.hasOwnProperty("coin")) {
          d.coin = $root.cosmos.base.v1beta1.Coin.toObject(m.coin, o);
        }
        return d;
      };
      MsgSuperfluidUndelegateAndUnbondLock.prototype.toJSON =
        function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
      return MsgSuperfluidUndelegateAndUnbondLock;
    })();
    superfluid.MsgSuperfluidUndelegateAndUnbondLockResponse = (function () {
      function MsgSuperfluidUndelegateAndUnbondLockResponse(p) {
        if (p)
          for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      MsgSuperfluidUndelegateAndUnbondLockResponse.prototype.lockId = $util.Long
        ? $util.Long.fromBits(0, 0, true)
        : 0;
      MsgSuperfluidUndelegateAndUnbondLockResponse.create = function create(
        properties
      ) {
        return new MsgSuperfluidUndelegateAndUnbondLockResponse(properties);
      };
      MsgSuperfluidUndelegateAndUnbondLockResponse.encode = function encode(
        m,
        w
      ) {
        if (!w) w = $Writer.create();
        if (m.lockId != null && Object.hasOwnProperty.call(m, "lockId"))
          w.uint32(8).uint64(m.lockId);
        return w;
      };
      MsgSuperfluidUndelegateAndUnbondLockResponse.decode = function decode(
        r,
        l
      ) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l,
          m =
            new $root.osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLockResponse();
        while (r.pos < c) {
          var t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.lockId = r.uint64();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      MsgSuperfluidUndelegateAndUnbondLockResponse.fromObject =
        function fromObject(d) {
          if (
            d instanceof
            $root.osmosis.superfluid
              .MsgSuperfluidUndelegateAndUnbondLockResponse
          )
            return d;
          var m =
            new $root.osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLockResponse();
          if (d.lockId != null) {
            if ($util.Long)
              (m.lockId = $util.Long.fromValue(d.lockId)).unsigned = true;
            else if (typeof d.lockId === "string")
              m.lockId = parseInt(d.lockId, 10);
            else if (typeof d.lockId === "number") m.lockId = d.lockId;
            else if (typeof d.lockId === "object")
              m.lockId = new $util.LongBits(
                d.lockId.low >>> 0,
                d.lockId.high >>> 0
              ).toNumber(true);
          }
          return m;
        };
      MsgSuperfluidUndelegateAndUnbondLockResponse.toObject = function toObject(
        m,
        o
      ) {
        if (!o) o = {};
        var d = {};
        if (o.defaults) {
          if ($util.Long) {
            var n = new $util.Long(0, 0, true);
            d.lockId =
              o.longs === String
                ? n.toString()
                : o.longs === Number
                ? n.toNumber()
                : n;
          } else d.lockId = o.longs === String ? "0" : 0;
        }
        if (m.lockId != null && m.hasOwnProperty("lockId")) {
          if (typeof m.lockId === "number")
            d.lockId = o.longs === String ? String(m.lockId) : m.lockId;
          else
            d.lockId =
              o.longs === String
                ? $util.Long.prototype.toString.call(m.lockId)
                : o.longs === Number
                ? new $util.LongBits(
                    m.lockId.low >>> 0,
                    m.lockId.high >>> 0
                  ).toNumber(true)
                : m.lockId;
        }
        return d;
      };
      MsgSuperfluidUndelegateAndUnbondLockResponse.prototype.toJSON =
        function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
      return MsgSuperfluidUndelegateAndUnbondLockResponse;
    })();
    superfluid.MsgLockAndSuperfluidDelegate = (function () {
      function MsgLockAndSuperfluidDelegate(p) {
        this.coins = [];
        if (p)
          for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      MsgLockAndSuperfluidDelegate.prototype.sender = "";
      MsgLockAndSuperfluidDelegate.prototype.coins = $util.emptyArray;
      MsgLockAndSuperfluidDelegate.prototype.valAddr = "";
      MsgLockAndSuperfluidDelegate.create = function create(properties) {
        return new MsgLockAndSuperfluidDelegate(properties);
      };
      MsgLockAndSuperfluidDelegate.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.sender != null && Object.hasOwnProperty.call(m, "sender"))
          w.uint32(10).string(m.sender);
        if (m.coins != null && m.coins.length) {
          for (var i = 0; i < m.coins.length; ++i)
            $root.cosmos.base.v1beta1.Coin.encode(
              m.coins[i],
              w.uint32(18).fork()
            ).ldelim();
        }
        if (m.valAddr != null && Object.hasOwnProperty.call(m, "valAddr"))
          w.uint32(26).string(m.valAddr);
        return w;
      };
      MsgLockAndSuperfluidDelegate.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l,
          m = new $root.osmosis.superfluid.MsgLockAndSuperfluidDelegate();
        while (r.pos < c) {
          var t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.sender = r.string();
              break;
            case 2:
              if (!(m.coins && m.coins.length)) m.coins = [];
              m.coins.push(
                $root.cosmos.base.v1beta1.Coin.decode(r, r.uint32())
              );
              break;
            case 3:
              m.valAddr = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      MsgLockAndSuperfluidDelegate.fromObject = function fromObject(d) {
        if (d instanceof $root.osmosis.superfluid.MsgLockAndSuperfluidDelegate)
          return d;
        var m = new $root.osmosis.superfluid.MsgLockAndSuperfluidDelegate();
        if (d.sender != null) {
          m.sender = String(d.sender);
        }
        if (d.coins) {
          if (!Array.isArray(d.coins))
            throw TypeError(
              ".osmosis.superfluid.MsgLockAndSuperfluidDelegate.coins: array expected"
            );
          m.coins = [];
          for (var i = 0; i < d.coins.length; ++i) {
            if (typeof d.coins[i] !== "object")
              throw TypeError(
                ".osmosis.superfluid.MsgLockAndSuperfluidDelegate.coins: object expected"
              );
            m.coins[i] = $root.cosmos.base.v1beta1.Coin.fromObject(d.coins[i]);
          }
        }
        if (d.valAddr != null) {
          m.valAddr = String(d.valAddr);
        }
        return m;
      };
      MsgLockAndSuperfluidDelegate.toObject = function toObject(m, o) {
        if (!o) o = {};
        var d = {};
        if (o.arrays || o.defaults) {
          d.coins = [];
        }
        if (o.defaults) {
          d.sender = "";
          d.valAddr = "";
        }
        if (m.sender != null && m.hasOwnProperty("sender")) {
          d.sender = m.sender;
        }
        if (m.coins && m.coins.length) {
          d.coins = [];
          for (var j = 0; j < m.coins.length; ++j) {
            d.coins[j] = $root.cosmos.base.v1beta1.Coin.toObject(m.coins[j], o);
          }
        }
        if (m.valAddr != null && m.hasOwnProperty("valAddr")) {
          d.valAddr = m.valAddr;
        }
        return d;
      };
      MsgLockAndSuperfluidDelegate.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };
      return MsgLockAndSuperfluidDelegate;
    })();
    superfluid.MsgLockAndSuperfluidDelegateResponse = (function () {
      function MsgLockAndSuperfluidDelegateResponse(p) {
        if (p)
          for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      MsgLockAndSuperfluidDelegateResponse.prototype.ID = $util.Long
        ? $util.Long.fromBits(0, 0, true)
        : 0;
      MsgLockAndSuperfluidDelegateResponse.create = function create(
        properties
      ) {
        return new MsgLockAndSuperfluidDelegateResponse(properties);
      };
      MsgLockAndSuperfluidDelegateResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.ID != null && Object.hasOwnProperty.call(m, "ID"))
          w.uint32(8).uint64(m.ID);
        return w;
      };
      MsgLockAndSuperfluidDelegateResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l,
          m =
            new $root.osmosis.superfluid.MsgLockAndSuperfluidDelegateResponse();
        while (r.pos < c) {
          var t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.ID = r.uint64();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      MsgLockAndSuperfluidDelegateResponse.fromObject = function fromObject(d) {
        if (
          d instanceof
          $root.osmosis.superfluid.MsgLockAndSuperfluidDelegateResponse
        )
          return d;
        var m =
          new $root.osmosis.superfluid.MsgLockAndSuperfluidDelegateResponse();
        if (d.ID != null) {
          if ($util.Long) (m.ID = $util.Long.fromValue(d.ID)).unsigned = true;
          else if (typeof d.ID === "string") m.ID = parseInt(d.ID, 10);
          else if (typeof d.ID === "number") m.ID = d.ID;
          else if (typeof d.ID === "object")
            m.ID = new $util.LongBits(d.ID.low >>> 0, d.ID.high >>> 0).toNumber(
              true
            );
        }
        return m;
      };
      MsgLockAndSuperfluidDelegateResponse.toObject = function toObject(m, o) {
        if (!o) o = {};
        var d = {};
        if (o.defaults) {
          if ($util.Long) {
            var n = new $util.Long(0, 0, true);
            d.ID =
              o.longs === String
                ? n.toString()
                : o.longs === Number
                ? n.toNumber()
                : n;
          } else d.ID = o.longs === String ? "0" : 0;
        }
        if (m.ID != null && m.hasOwnProperty("ID")) {
          if (typeof m.ID === "number")
            d.ID = o.longs === String ? String(m.ID) : m.ID;
          else
            d.ID =
              o.longs === String
                ? $util.Long.prototype.toString.call(m.ID)
                : o.longs === Number
                ? new $util.LongBits(m.ID.low >>> 0, m.ID.high >>> 0).toNumber(
                    true
                  )
                : m.ID;
        }
        return d;
      };
      MsgLockAndSuperfluidDelegateResponse.prototype.toJSON =
        function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
      return MsgLockAndSuperfluidDelegateResponse;
    })();
    superfluid.MsgCreateFullRangePositionAndSuperfluidDelegate = (function () {
      function MsgCreateFullRangePositionAndSuperfluidDelegate(p) {
        this.coins = [];
        if (p)
          for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      MsgCreateFullRangePositionAndSuperfluidDelegate.prototype.sender = "";
      MsgCreateFullRangePositionAndSuperfluidDelegate.prototype.coins =
        $util.emptyArray;
      MsgCreateFullRangePositionAndSuperfluidDelegate.prototype.valAddr = "";
      MsgCreateFullRangePositionAndSuperfluidDelegate.prototype.poolId =
        $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
      MsgCreateFullRangePositionAndSuperfluidDelegate.create = function create(
        properties
      ) {
        return new MsgCreateFullRangePositionAndSuperfluidDelegate(properties);
      };
      MsgCreateFullRangePositionAndSuperfluidDelegate.encode = function encode(
        m,
        w
      ) {
        if (!w) w = $Writer.create();
        if (m.sender != null && Object.hasOwnProperty.call(m, "sender"))
          w.uint32(10).string(m.sender);
        if (m.coins != null && m.coins.length) {
          for (var i = 0; i < m.coins.length; ++i)
            $root.cosmos.base.v1beta1.Coin.encode(
              m.coins[i],
              w.uint32(18).fork()
            ).ldelim();
        }
        if (m.valAddr != null && Object.hasOwnProperty.call(m, "valAddr"))
          w.uint32(26).string(m.valAddr);
        if (m.poolId != null && Object.hasOwnProperty.call(m, "poolId"))
          w.uint32(32).uint64(m.poolId);
        return w;
      };
      MsgCreateFullRangePositionAndSuperfluidDelegate.decode = function decode(
        r,
        l
      ) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l,
          m =
            new $root.osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegate();
        while (r.pos < c) {
          var t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.sender = r.string();
              break;
            case 2:
              if (!(m.coins && m.coins.length)) m.coins = [];
              m.coins.push(
                $root.cosmos.base.v1beta1.Coin.decode(r, r.uint32())
              );
              break;
            case 3:
              m.valAddr = r.string();
              break;
            case 4:
              m.poolId = r.uint64();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      MsgCreateFullRangePositionAndSuperfluidDelegate.fromObject =
        function fromObject(d) {
          if (
            d instanceof
            $root.osmosis.superfluid
              .MsgCreateFullRangePositionAndSuperfluidDelegate
          )
            return d;
          var m =
            new $root.osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegate();
          if (d.sender != null) {
            m.sender = String(d.sender);
          }
          if (d.coins) {
            if (!Array.isArray(d.coins))
              throw TypeError(
                ".osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegate.coins: array expected"
              );
            m.coins = [];
            for (var i = 0; i < d.coins.length; ++i) {
              if (typeof d.coins[i] !== "object")
                throw TypeError(
                  ".osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegate.coins: object expected"
                );
              m.coins[i] = $root.cosmos.base.v1beta1.Coin.fromObject(
                d.coins[i]
              );
            }
          }
          if (d.valAddr != null) {
            m.valAddr = String(d.valAddr);
          }
          if (d.poolId != null) {
            if ($util.Long)
              (m.poolId = $util.Long.fromValue(d.poolId)).unsigned = true;
            else if (typeof d.poolId === "string")
              m.poolId = parseInt(d.poolId, 10);
            else if (typeof d.poolId === "number") m.poolId = d.poolId;
            else if (typeof d.poolId === "object")
              m.poolId = new $util.LongBits(
                d.poolId.low >>> 0,
                d.poolId.high >>> 0
              ).toNumber(true);
          }
          return m;
        };
      MsgCreateFullRangePositionAndSuperfluidDelegate.toObject =
        function toObject(m, o) {
          if (!o) o = {};
          var d = {};
          if (o.arrays || o.defaults) {
            d.coins = [];
          }
          if (o.defaults) {
            d.sender = "";
            d.valAddr = "";
            if ($util.Long) {
              var n = new $util.Long(0, 0, true);
              d.poolId =
                o.longs === String
                  ? n.toString()
                  : o.longs === Number
                  ? n.toNumber()
                  : n;
            } else d.poolId = o.longs === String ? "0" : 0;
          }
          if (m.sender != null && m.hasOwnProperty("sender")) {
            d.sender = m.sender;
          }
          if (m.coins && m.coins.length) {
            d.coins = [];
            for (var j = 0; j < m.coins.length; ++j) {
              d.coins[j] = $root.cosmos.base.v1beta1.Coin.toObject(
                m.coins[j],
                o
              );
            }
          }
          if (m.valAddr != null && m.hasOwnProperty("valAddr")) {
            d.valAddr = m.valAddr;
          }
          if (m.poolId != null && m.hasOwnProperty("poolId")) {
            if (typeof m.poolId === "number")
              d.poolId = o.longs === String ? String(m.poolId) : m.poolId;
            else
              d.poolId =
                o.longs === String
                  ? $util.Long.prototype.toString.call(m.poolId)
                  : o.longs === Number
                  ? new $util.LongBits(
                      m.poolId.low >>> 0,
                      m.poolId.high >>> 0
                    ).toNumber(true)
                  : m.poolId;
          }
          return d;
        };
      MsgCreateFullRangePositionAndSuperfluidDelegate.prototype.toJSON =
        function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
      return MsgCreateFullRangePositionAndSuperfluidDelegate;
    })();
    superfluid.MsgCreateFullRangePositionAndSuperfluidDelegateResponse =
      (function () {
        function MsgCreateFullRangePositionAndSuperfluidDelegateResponse(p) {
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        MsgCreateFullRangePositionAndSuperfluidDelegateResponse.prototype.lockID =
          $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
        MsgCreateFullRangePositionAndSuperfluidDelegateResponse.prototype.positionID =
          $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
        MsgCreateFullRangePositionAndSuperfluidDelegateResponse.create =
          function create(properties) {
            return new MsgCreateFullRangePositionAndSuperfluidDelegateResponse(
              properties
            );
          };
        MsgCreateFullRangePositionAndSuperfluidDelegateResponse.encode =
          function encode(m, w) {
            if (!w) w = $Writer.create();
            if (m.lockID != null && Object.hasOwnProperty.call(m, "lockID"))
              w.uint32(8).uint64(m.lockID);
            if (
              m.positionID != null &&
              Object.hasOwnProperty.call(m, "positionID")
            )
              w.uint32(16).uint64(m.positionID);
            return w;
          };
        MsgCreateFullRangePositionAndSuperfluidDelegateResponse.decode =
          function decode(r, l) {
            if (!(r instanceof $Reader)) r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l,
              m =
                new $root.osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegateResponse();
            while (r.pos < c) {
              var t = r.uint32();
              switch (t >>> 3) {
                case 1:
                  m.lockID = r.uint64();
                  break;
                case 2:
                  m.positionID = r.uint64();
                  break;
                default:
                  r.skipType(t & 7);
                  break;
              }
            }
            return m;
          };
        MsgCreateFullRangePositionAndSuperfluidDelegateResponse.fromObject =
          function fromObject(d) {
            if (
              d instanceof
              $root.osmosis.superfluid
                .MsgCreateFullRangePositionAndSuperfluidDelegateResponse
            )
              return d;
            var m =
              new $root.osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegateResponse();
            if (d.lockID != null) {
              if ($util.Long)
                (m.lockID = $util.Long.fromValue(d.lockID)).unsigned = true;
              else if (typeof d.lockID === "string")
                m.lockID = parseInt(d.lockID, 10);
              else if (typeof d.lockID === "number") m.lockID = d.lockID;
              else if (typeof d.lockID === "object")
                m.lockID = new $util.LongBits(
                  d.lockID.low >>> 0,
                  d.lockID.high >>> 0
                ).toNumber(true);
            }
            if (d.positionID != null) {
              if ($util.Long)
                (m.positionID = $util.Long.fromValue(
                  d.positionID
                )).unsigned = true;
              else if (typeof d.positionID === "string")
                m.positionID = parseInt(d.positionID, 10);
              else if (typeof d.positionID === "number")
                m.positionID = d.positionID;
              else if (typeof d.positionID === "object")
                m.positionID = new $util.LongBits(
                  d.positionID.low >>> 0,
                  d.positionID.high >>> 0
                ).toNumber(true);
            }
            return m;
          };
        MsgCreateFullRangePositionAndSuperfluidDelegateResponse.toObject =
          function toObject(m, o) {
            if (!o) o = {};
            var d = {};
            if (o.defaults) {
              if ($util.Long) {
                var n = new $util.Long(0, 0, true);
                d.lockID =
                  o.longs === String
                    ? n.toString()
                    : o.longs === Number
                    ? n.toNumber()
                    : n;
              } else d.lockID = o.longs === String ? "0" : 0;
              if ($util.Long) {
                var n = new $util.Long(0, 0, true);
                d.positionID =
                  o.longs === String
                    ? n.toString()
                    : o.longs === Number
                    ? n.toNumber()
                    : n;
              } else d.positionID = o.longs === String ? "0" : 0;
            }
            if (m.lockID != null && m.hasOwnProperty("lockID")) {
              if (typeof m.lockID === "number")
                d.lockID = o.longs === String ? String(m.lockID) : m.lockID;
              else
                d.lockID =
                  o.longs === String
                    ? $util.Long.prototype.toString.call(m.lockID)
                    : o.longs === Number
                    ? new $util.LongBits(
                        m.lockID.low >>> 0,
                        m.lockID.high >>> 0
                      ).toNumber(true)
                    : m.lockID;
            }
            if (m.positionID != null && m.hasOwnProperty("positionID")) {
              if (typeof m.positionID === "number")
                d.positionID =
                  o.longs === String ? String(m.positionID) : m.positionID;
              else
                d.positionID =
                  o.longs === String
                    ? $util.Long.prototype.toString.call(m.positionID)
                    : o.longs === Number
                    ? new $util.LongBits(
                        m.positionID.low >>> 0,
                        m.positionID.high >>> 0
                      ).toNumber(true)
                    : m.positionID;
            }
            return d;
          };
        MsgCreateFullRangePositionAndSuperfluidDelegateResponse.prototype.toJSON =
          function toJSON() {
            return this.constructor.toObject(
              this,
              $protobuf.util.toJSONOptions
            );
          };
        return MsgCreateFullRangePositionAndSuperfluidDelegateResponse;
      })();
    superfluid.MsgUnPoolWhitelistedPool = (function () {
      function MsgUnPoolWhitelistedPool(p) {
        if (p)
          for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      MsgUnPoolWhitelistedPool.prototype.sender = "";
      MsgUnPoolWhitelistedPool.prototype.poolId = $util.Long
        ? $util.Long.fromBits(0, 0, true)
        : 0;
      MsgUnPoolWhitelistedPool.create = function create(properties) {
        return new MsgUnPoolWhitelistedPool(properties);
      };
      MsgUnPoolWhitelistedPool.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.sender != null && Object.hasOwnProperty.call(m, "sender"))
          w.uint32(10).string(m.sender);
        if (m.poolId != null && Object.hasOwnProperty.call(m, "poolId"))
          w.uint32(16).uint64(m.poolId);
        return w;
      };
      MsgUnPoolWhitelistedPool.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l,
          m = new $root.osmosis.superfluid.MsgUnPoolWhitelistedPool();
        while (r.pos < c) {
          var t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.sender = r.string();
              break;
            case 2:
              m.poolId = r.uint64();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      MsgUnPoolWhitelistedPool.fromObject = function fromObject(d) {
        if (d instanceof $root.osmosis.superfluid.MsgUnPoolWhitelistedPool)
          return d;
        var m = new $root.osmosis.superfluid.MsgUnPoolWhitelistedPool();
        if (d.sender != null) {
          m.sender = String(d.sender);
        }
        if (d.poolId != null) {
          if ($util.Long)
            (m.poolId = $util.Long.fromValue(d.poolId)).unsigned = true;
          else if (typeof d.poolId === "string")
            m.poolId = parseInt(d.poolId, 10);
          else if (typeof d.poolId === "number") m.poolId = d.poolId;
          else if (typeof d.poolId === "object")
            m.poolId = new $util.LongBits(
              d.poolId.low >>> 0,
              d.poolId.high >>> 0
            ).toNumber(true);
        }
        return m;
      };
      MsgUnPoolWhitelistedPool.toObject = function toObject(m, o) {
        if (!o) o = {};
        var d = {};
        if (o.defaults) {
          d.sender = "";
          if ($util.Long) {
            var n = new $util.Long(0, 0, true);
            d.poolId =
              o.longs === String
                ? n.toString()
                : o.longs === Number
                ? n.toNumber()
                : n;
          } else d.poolId = o.longs === String ? "0" : 0;
        }
        if (m.sender != null && m.hasOwnProperty("sender")) {
          d.sender = m.sender;
        }
        if (m.poolId != null && m.hasOwnProperty("poolId")) {
          if (typeof m.poolId === "number")
            d.poolId = o.longs === String ? String(m.poolId) : m.poolId;
          else
            d.poolId =
              o.longs === String
                ? $util.Long.prototype.toString.call(m.poolId)
                : o.longs === Number
                ? new $util.LongBits(
                    m.poolId.low >>> 0,
                    m.poolId.high >>> 0
                  ).toNumber(true)
                : m.poolId;
        }
        return d;
      };
      MsgUnPoolWhitelistedPool.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };
      return MsgUnPoolWhitelistedPool;
    })();
    superfluid.MsgUnPoolWhitelistedPoolResponse = (function () {
      function MsgUnPoolWhitelistedPoolResponse(p) {
        this.exitedLockIds = [];
        if (p)
          for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      MsgUnPoolWhitelistedPoolResponse.prototype.exitedLockIds =
        $util.emptyArray;
      MsgUnPoolWhitelistedPoolResponse.create = function create(properties) {
        return new MsgUnPoolWhitelistedPoolResponse(properties);
      };
      MsgUnPoolWhitelistedPoolResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.exitedLockIds != null && m.exitedLockIds.length) {
          w.uint32(10).fork();
          for (var i = 0; i < m.exitedLockIds.length; ++i)
            w.uint64(m.exitedLockIds[i]);
          w.ldelim();
        }
        return w;
      };
      MsgUnPoolWhitelistedPoolResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l,
          m = new $root.osmosis.superfluid.MsgUnPoolWhitelistedPoolResponse();
        while (r.pos < c) {
          var t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.exitedLockIds && m.exitedLockIds.length))
                m.exitedLockIds = [];
              if ((t & 7) === 2) {
                var c2 = r.uint32() + r.pos;
                while (r.pos < c2) m.exitedLockIds.push(r.uint64());
              } else m.exitedLockIds.push(r.uint64());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      MsgUnPoolWhitelistedPoolResponse.fromObject = function fromObject(d) {
        if (
          d instanceof $root.osmosis.superfluid.MsgUnPoolWhitelistedPoolResponse
        )
          return d;
        var m = new $root.osmosis.superfluid.MsgUnPoolWhitelistedPoolResponse();
        if (d.exitedLockIds) {
          if (!Array.isArray(d.exitedLockIds))
            throw TypeError(
              ".osmosis.superfluid.MsgUnPoolWhitelistedPoolResponse.exitedLockIds: array expected"
            );
          m.exitedLockIds = [];
          for (var i = 0; i < d.exitedLockIds.length; ++i) {
            if ($util.Long)
              (m.exitedLockIds[i] = $util.Long.fromValue(
                d.exitedLockIds[i]
              )).unsigned = true;
            else if (typeof d.exitedLockIds[i] === "string")
              m.exitedLockIds[i] = parseInt(d.exitedLockIds[i], 10);
            else if (typeof d.exitedLockIds[i] === "number")
              m.exitedLockIds[i] = d.exitedLockIds[i];
            else if (typeof d.exitedLockIds[i] === "object")
              m.exitedLockIds[i] = new $util.LongBits(
                d.exitedLockIds[i].low >>> 0,
                d.exitedLockIds[i].high >>> 0
              ).toNumber(true);
          }
        }
        return m;
      };
      MsgUnPoolWhitelistedPoolResponse.toObject = function toObject(m, o) {
        if (!o) o = {};
        var d = {};
        if (o.arrays || o.defaults) {
          d.exitedLockIds = [];
        }
        if (m.exitedLockIds && m.exitedLockIds.length) {
          d.exitedLockIds = [];
          for (var j = 0; j < m.exitedLockIds.length; ++j) {
            if (typeof m.exitedLockIds[j] === "number")
              d.exitedLockIds[j] =
                o.longs === String
                  ? String(m.exitedLockIds[j])
                  : m.exitedLockIds[j];
            else
              d.exitedLockIds[j] =
                o.longs === String
                  ? $util.Long.prototype.toString.call(m.exitedLockIds[j])
                  : o.longs === Number
                  ? new $util.LongBits(
                      m.exitedLockIds[j].low >>> 0,
                      m.exitedLockIds[j].high >>> 0
                    ).toNumber(true)
                  : m.exitedLockIds[j];
          }
        }
        return d;
      };
      MsgUnPoolWhitelistedPoolResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };
      return MsgUnPoolWhitelistedPoolResponse;
    })();
    superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition =
      (function () {
        function MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition(p) {
          this.tokenOutMins = [];
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.prototype.sender =
          "";
        MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.prototype.lockId =
          $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
        MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.prototype.sharesToMigrate =
          null;
        MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.prototype.tokenOutMins =
          $util.emptyArray;
        MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.create =
          function create(properties) {
            return new MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition(
              properties
            );
          };
        MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.encode =
          function encode(m, w) {
            if (!w) w = $Writer.create();
            if (m.sender != null && Object.hasOwnProperty.call(m, "sender"))
              w.uint32(10).string(m.sender);
            if (m.lockId != null && Object.hasOwnProperty.call(m, "lockId"))
              w.uint32(16).uint64(m.lockId);
            if (
              m.sharesToMigrate != null &&
              Object.hasOwnProperty.call(m, "sharesToMigrate")
            )
              $root.cosmos.base.v1beta1.Coin.encode(
                m.sharesToMigrate,
                w.uint32(26).fork()
              ).ldelim();
            if (m.tokenOutMins != null && m.tokenOutMins.length) {
              for (var i = 0; i < m.tokenOutMins.length; ++i)
                $root.cosmos.base.v1beta1.Coin.encode(
                  m.tokenOutMins[i],
                  w.uint32(34).fork()
                ).ldelim();
            }
            return w;
          };
        MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.decode =
          function decode(r, l) {
            if (!(r instanceof $Reader)) r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l,
              m =
                new $root.osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition();
            while (r.pos < c) {
              var t = r.uint32();
              switch (t >>> 3) {
                case 1:
                  m.sender = r.string();
                  break;
                case 2:
                  m.lockId = r.uint64();
                  break;
                case 3:
                  m.sharesToMigrate = $root.cosmos.base.v1beta1.Coin.decode(
                    r,
                    r.uint32()
                  );
                  break;
                case 4:
                  if (!(m.tokenOutMins && m.tokenOutMins.length))
                    m.tokenOutMins = [];
                  m.tokenOutMins.push(
                    $root.cosmos.base.v1beta1.Coin.decode(r, r.uint32())
                  );
                  break;
                default:
                  r.skipType(t & 7);
                  break;
              }
            }
            return m;
          };
        MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.fromObject =
          function fromObject(d) {
            if (
              d instanceof
              $root.osmosis.superfluid
                .MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition
            )
              return d;
            var m =
              new $root.osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition();
            if (d.sender != null) {
              m.sender = String(d.sender);
            }
            if (d.lockId != null) {
              if ($util.Long)
                (m.lockId = $util.Long.fromValue(d.lockId)).unsigned = true;
              else if (typeof d.lockId === "string")
                m.lockId = parseInt(d.lockId, 10);
              else if (typeof d.lockId === "number") m.lockId = d.lockId;
              else if (typeof d.lockId === "object")
                m.lockId = new $util.LongBits(
                  d.lockId.low >>> 0,
                  d.lockId.high >>> 0
                ).toNumber(true);
            }
            if (d.sharesToMigrate != null) {
              if (typeof d.sharesToMigrate !== "object")
                throw TypeError(
                  ".osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.sharesToMigrate: object expected"
                );
              m.sharesToMigrate = $root.cosmos.base.v1beta1.Coin.fromObject(
                d.sharesToMigrate
              );
            }
            if (d.tokenOutMins) {
              if (!Array.isArray(d.tokenOutMins))
                throw TypeError(
                  ".osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.tokenOutMins: array expected"
                );
              m.tokenOutMins = [];
              for (var i = 0; i < d.tokenOutMins.length; ++i) {
                if (typeof d.tokenOutMins[i] !== "object")
                  throw TypeError(
                    ".osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.tokenOutMins: object expected"
                  );
                m.tokenOutMins[i] = $root.cosmos.base.v1beta1.Coin.fromObject(
                  d.tokenOutMins[i]
                );
              }
            }
            return m;
          };
        MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.toObject =
          function toObject(m, o) {
            if (!o) o = {};
            var d = {};
            if (o.arrays || o.defaults) {
              d.tokenOutMins = [];
            }
            if (o.defaults) {
              d.sender = "";
              if ($util.Long) {
                var n = new $util.Long(0, 0, true);
                d.lockId =
                  o.longs === String
                    ? n.toString()
                    : o.longs === Number
                    ? n.toNumber()
                    : n;
              } else d.lockId = o.longs === String ? "0" : 0;
              d.sharesToMigrate = null;
            }
            if (m.sender != null && m.hasOwnProperty("sender")) {
              d.sender = m.sender;
            }
            if (m.lockId != null && m.hasOwnProperty("lockId")) {
              if (typeof m.lockId === "number")
                d.lockId = o.longs === String ? String(m.lockId) : m.lockId;
              else
                d.lockId =
                  o.longs === String
                    ? $util.Long.prototype.toString.call(m.lockId)
                    : o.longs === Number
                    ? new $util.LongBits(
                        m.lockId.low >>> 0,
                        m.lockId.high >>> 0
                      ).toNumber(true)
                    : m.lockId;
            }
            if (
              m.sharesToMigrate != null &&
              m.hasOwnProperty("sharesToMigrate")
            ) {
              d.sharesToMigrate = $root.cosmos.base.v1beta1.Coin.toObject(
                m.sharesToMigrate,
                o
              );
            }
            if (m.tokenOutMins && m.tokenOutMins.length) {
              d.tokenOutMins = [];
              for (var j = 0; j < m.tokenOutMins.length; ++j) {
                d.tokenOutMins[j] = $root.cosmos.base.v1beta1.Coin.toObject(
                  m.tokenOutMins[j],
                  o
                );
              }
            }
            return d;
          };
        MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.prototype.toJSON =
          function toJSON() {
            return this.constructor.toObject(
              this,
              $protobuf.util.toJSONOptions
            );
          };
        return MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
      })();
    superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse =
      (function () {
        function MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse(
          p
        ) {
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse.prototype.amount0 =
          "";
        MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse.prototype.amount1 =
          "";
        MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse.prototype.liquidityCreated =
          "";
        MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse.prototype.joinTime =
          null;
        MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse.create =
          function create(properties) {
            return new MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse(
              properties
            );
          };
        MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse.encode =
          function encode(m, w) {
            if (!w) w = $Writer.create();
            if (m.amount0 != null && Object.hasOwnProperty.call(m, "amount0"))
              w.uint32(10).string(m.amount0);
            if (m.amount1 != null && Object.hasOwnProperty.call(m, "amount1"))
              w.uint32(18).string(m.amount1);
            if (
              m.liquidityCreated != null &&
              Object.hasOwnProperty.call(m, "liquidityCreated")
            )
              w.uint32(26).string(m.liquidityCreated);
            if (m.joinTime != null && Object.hasOwnProperty.call(m, "joinTime"))
              $root.google.protobuf.Timestamp.encode(
                m.joinTime,
                w.uint32(34).fork()
              ).ldelim();
            return w;
          };
        MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse.decode =
          function decode(r, l) {
            if (!(r instanceof $Reader)) r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l,
              m =
                new $root.osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse();
            while (r.pos < c) {
              var t = r.uint32();
              switch (t >>> 3) {
                case 1:
                  m.amount0 = r.string();
                  break;
                case 2:
                  m.amount1 = r.string();
                  break;
                case 3:
                  m.liquidityCreated = r.string();
                  break;
                case 4:
                  m.joinTime = $root.google.protobuf.Timestamp.decode(
                    r,
                    r.uint32()
                  );
                  break;
                default:
                  r.skipType(t & 7);
                  break;
              }
            }
            return m;
          };
        MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse.fromObject =
          function fromObject(d) {
            if (
              d instanceof
              $root.osmosis.superfluid
                .MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse
            )
              return d;
            var m =
              new $root.osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse();
            if (d.amount0 != null) {
              m.amount0 = String(d.amount0);
            }
            if (d.amount1 != null) {
              m.amount1 = String(d.amount1);
            }
            if (d.liquidityCreated != null) {
              m.liquidityCreated = String(d.liquidityCreated);
            }
            if (d.joinTime != null) {
              if (typeof d.joinTime !== "object")
                throw TypeError(
                  ".osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse.joinTime: object expected"
                );
              m.joinTime = $root.google.protobuf.Timestamp.fromObject(
                d.joinTime
              );
            }
            return m;
          };
        MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse.toObject =
          function toObject(m, o) {
            if (!o) o = {};
            var d = {};
            if (o.defaults) {
              d.amount0 = "";
              d.amount1 = "";
              d.liquidityCreated = "";
              d.joinTime = null;
            }
            if (m.amount0 != null && m.hasOwnProperty("amount0")) {
              d.amount0 = m.amount0;
            }
            if (m.amount1 != null && m.hasOwnProperty("amount1")) {
              d.amount1 = m.amount1;
            }
            if (
              m.liquidityCreated != null &&
              m.hasOwnProperty("liquidityCreated")
            ) {
              d.liquidityCreated = m.liquidityCreated;
            }
            if (m.joinTime != null && m.hasOwnProperty("joinTime")) {
              d.joinTime = $root.google.protobuf.Timestamp.toObject(
                m.joinTime,
                o
              );
            }
            return d;
          };
        MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse.prototype.toJSON =
          function toJSON() {
            return this.constructor.toObject(
              this,
              $protobuf.util.toJSONOptions
            );
          };
        return MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse;
      })();
    superfluid.MsgAddToConcentratedLiquiditySuperfluidPosition = (function () {
      function MsgAddToConcentratedLiquiditySuperfluidPosition(p) {
        if (p)
          for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      MsgAddToConcentratedLiquiditySuperfluidPosition.prototype.positionId =
        $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
      MsgAddToConcentratedLiquiditySuperfluidPosition.prototype.sender = "";
      MsgAddToConcentratedLiquiditySuperfluidPosition.prototype.tokenDesired0 =
        null;
      MsgAddToConcentratedLiquiditySuperfluidPosition.prototype.tokenDesired1 =
        null;
      MsgAddToConcentratedLiquiditySuperfluidPosition.create = function create(
        properties
      ) {
        return new MsgAddToConcentratedLiquiditySuperfluidPosition(properties);
      };
      MsgAddToConcentratedLiquiditySuperfluidPosition.encode = function encode(
        m,
        w
      ) {
        if (!w) w = $Writer.create();
        if (m.positionId != null && Object.hasOwnProperty.call(m, "positionId"))
          w.uint32(8).uint64(m.positionId);
        if (m.sender != null && Object.hasOwnProperty.call(m, "sender"))
          w.uint32(18).string(m.sender);
        if (
          m.tokenDesired0 != null &&
          Object.hasOwnProperty.call(m, "tokenDesired0")
        )
          $root.cosmos.base.v1beta1.Coin.encode(
            m.tokenDesired0,
            w.uint32(26).fork()
          ).ldelim();
        if (
          m.tokenDesired1 != null &&
          Object.hasOwnProperty.call(m, "tokenDesired1")
        )
          $root.cosmos.base.v1beta1.Coin.encode(
            m.tokenDesired1,
            w.uint32(34).fork()
          ).ldelim();
        return w;
      };
      MsgAddToConcentratedLiquiditySuperfluidPosition.decode = function decode(
        r,
        l
      ) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l,
          m =
            new $root.osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPosition();
        while (r.pos < c) {
          var t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.positionId = r.uint64();
              break;
            case 2:
              m.sender = r.string();
              break;
            case 3:
              m.tokenDesired0 = $root.cosmos.base.v1beta1.Coin.decode(
                r,
                r.uint32()
              );
              break;
            case 4:
              m.tokenDesired1 = $root.cosmos.base.v1beta1.Coin.decode(
                r,
                r.uint32()
              );
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      MsgAddToConcentratedLiquiditySuperfluidPosition.fromObject =
        function fromObject(d) {
          if (
            d instanceof
            $root.osmosis.superfluid
              .MsgAddToConcentratedLiquiditySuperfluidPosition
          )
            return d;
          var m =
            new $root.osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPosition();
          if (d.positionId != null) {
            if ($util.Long)
              (m.positionId = $util.Long.fromValue(
                d.positionId
              )).unsigned = true;
            else if (typeof d.positionId === "string")
              m.positionId = parseInt(d.positionId, 10);
            else if (typeof d.positionId === "number")
              m.positionId = d.positionId;
            else if (typeof d.positionId === "object")
              m.positionId = new $util.LongBits(
                d.positionId.low >>> 0,
                d.positionId.high >>> 0
              ).toNumber(true);
          }
          if (d.sender != null) {
            m.sender = String(d.sender);
          }
          if (d.tokenDesired0 != null) {
            if (typeof d.tokenDesired0 !== "object")
              throw TypeError(
                ".osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPosition.tokenDesired0: object expected"
              );
            m.tokenDesired0 = $root.cosmos.base.v1beta1.Coin.fromObject(
              d.tokenDesired0
            );
          }
          if (d.tokenDesired1 != null) {
            if (typeof d.tokenDesired1 !== "object")
              throw TypeError(
                ".osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPosition.tokenDesired1: object expected"
              );
            m.tokenDesired1 = $root.cosmos.base.v1beta1.Coin.fromObject(
              d.tokenDesired1
            );
          }
          return m;
        };
      MsgAddToConcentratedLiquiditySuperfluidPosition.toObject =
        function toObject(m, o) {
          if (!o) o = {};
          var d = {};
          if (o.defaults) {
            if ($util.Long) {
              var n = new $util.Long(0, 0, true);
              d.positionId =
                o.longs === String
                  ? n.toString()
                  : o.longs === Number
                  ? n.toNumber()
                  : n;
            } else d.positionId = o.longs === String ? "0" : 0;
            d.sender = "";
            d.tokenDesired0 = null;
            d.tokenDesired1 = null;
          }
          if (m.positionId != null && m.hasOwnProperty("positionId")) {
            if (typeof m.positionId === "number")
              d.positionId =
                o.longs === String ? String(m.positionId) : m.positionId;
            else
              d.positionId =
                o.longs === String
                  ? $util.Long.prototype.toString.call(m.positionId)
                  : o.longs === Number
                  ? new $util.LongBits(
                      m.positionId.low >>> 0,
                      m.positionId.high >>> 0
                    ).toNumber(true)
                  : m.positionId;
          }
          if (m.sender != null && m.hasOwnProperty("sender")) {
            d.sender = m.sender;
          }
          if (m.tokenDesired0 != null && m.hasOwnProperty("tokenDesired0")) {
            d.tokenDesired0 = $root.cosmos.base.v1beta1.Coin.toObject(
              m.tokenDesired0,
              o
            );
          }
          if (m.tokenDesired1 != null && m.hasOwnProperty("tokenDesired1")) {
            d.tokenDesired1 = $root.cosmos.base.v1beta1.Coin.toObject(
              m.tokenDesired1,
              o
            );
          }
          return d;
        };
      MsgAddToConcentratedLiquiditySuperfluidPosition.prototype.toJSON =
        function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
      return MsgAddToConcentratedLiquiditySuperfluidPosition;
    })();
    superfluid.MsgAddToConcentratedLiquiditySuperfluidPositionResponse =
      (function () {
        function MsgAddToConcentratedLiquiditySuperfluidPositionResponse(p) {
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        MsgAddToConcentratedLiquiditySuperfluidPositionResponse.prototype.positionId =
          $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
        MsgAddToConcentratedLiquiditySuperfluidPositionResponse.prototype.amount0 =
          "";
        MsgAddToConcentratedLiquiditySuperfluidPositionResponse.prototype.amount1 =
          "";
        MsgAddToConcentratedLiquiditySuperfluidPositionResponse.prototype.newLiquidity =
          "";
        MsgAddToConcentratedLiquiditySuperfluidPositionResponse.prototype.lockId =
          $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
        MsgAddToConcentratedLiquiditySuperfluidPositionResponse.create =
          function create(properties) {
            return new MsgAddToConcentratedLiquiditySuperfluidPositionResponse(
              properties
            );
          };
        MsgAddToConcentratedLiquiditySuperfluidPositionResponse.encode =
          function encode(m, w) {
            if (!w) w = $Writer.create();
            if (
              m.positionId != null &&
              Object.hasOwnProperty.call(m, "positionId")
            )
              w.uint32(8).uint64(m.positionId);
            if (m.amount0 != null && Object.hasOwnProperty.call(m, "amount0"))
              w.uint32(18).string(m.amount0);
            if (m.amount1 != null && Object.hasOwnProperty.call(m, "amount1"))
              w.uint32(26).string(m.amount1);
            if (m.lockId != null && Object.hasOwnProperty.call(m, "lockId"))
              w.uint32(32).uint64(m.lockId);
            if (
              m.newLiquidity != null &&
              Object.hasOwnProperty.call(m, "newLiquidity")
            )
              w.uint32(42).string(m.newLiquidity);
            return w;
          };
        MsgAddToConcentratedLiquiditySuperfluidPositionResponse.decode =
          function decode(r, l) {
            if (!(r instanceof $Reader)) r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l,
              m =
                new $root.osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPositionResponse();
            while (r.pos < c) {
              var t = r.uint32();
              switch (t >>> 3) {
                case 1:
                  m.positionId = r.uint64();
                  break;
                case 2:
                  m.amount0 = r.string();
                  break;
                case 3:
                  m.amount1 = r.string();
                  break;
                case 5:
                  m.newLiquidity = r.string();
                  break;
                case 4:
                  m.lockId = r.uint64();
                  break;
                default:
                  r.skipType(t & 7);
                  break;
              }
            }
            return m;
          };
        MsgAddToConcentratedLiquiditySuperfluidPositionResponse.fromObject =
          function fromObject(d) {
            if (
              d instanceof
              $root.osmosis.superfluid
                .MsgAddToConcentratedLiquiditySuperfluidPositionResponse
            )
              return d;
            var m =
              new $root.osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPositionResponse();
            if (d.positionId != null) {
              if ($util.Long)
                (m.positionId = $util.Long.fromValue(
                  d.positionId
                )).unsigned = true;
              else if (typeof d.positionId === "string")
                m.positionId = parseInt(d.positionId, 10);
              else if (typeof d.positionId === "number")
                m.positionId = d.positionId;
              else if (typeof d.positionId === "object")
                m.positionId = new $util.LongBits(
                  d.positionId.low >>> 0,
                  d.positionId.high >>> 0
                ).toNumber(true);
            }
            if (d.amount0 != null) {
              m.amount0 = String(d.amount0);
            }
            if (d.amount1 != null) {
              m.amount1 = String(d.amount1);
            }
            if (d.newLiquidity != null) {
              m.newLiquidity = String(d.newLiquidity);
            }
            if (d.lockId != null) {
              if ($util.Long)
                (m.lockId = $util.Long.fromValue(d.lockId)).unsigned = true;
              else if (typeof d.lockId === "string")
                m.lockId = parseInt(d.lockId, 10);
              else if (typeof d.lockId === "number") m.lockId = d.lockId;
              else if (typeof d.lockId === "object")
                m.lockId = new $util.LongBits(
                  d.lockId.low >>> 0,
                  d.lockId.high >>> 0
                ).toNumber(true);
            }
            return m;
          };
        MsgAddToConcentratedLiquiditySuperfluidPositionResponse.toObject =
          function toObject(m, o) {
            if (!o) o = {};
            var d = {};
            if (o.defaults) {
              if ($util.Long) {
                var n = new $util.Long(0, 0, true);
                d.positionId =
                  o.longs === String
                    ? n.toString()
                    : o.longs === Number
                    ? n.toNumber()
                    : n;
              } else d.positionId = o.longs === String ? "0" : 0;
              d.amount0 = "";
              d.amount1 = "";
              if ($util.Long) {
                var n = new $util.Long(0, 0, true);
                d.lockId =
                  o.longs === String
                    ? n.toString()
                    : o.longs === Number
                    ? n.toNumber()
                    : n;
              } else d.lockId = o.longs === String ? "0" : 0;
              d.newLiquidity = "";
            }
            if (m.positionId != null && m.hasOwnProperty("positionId")) {
              if (typeof m.positionId === "number")
                d.positionId =
                  o.longs === String ? String(m.positionId) : m.positionId;
              else
                d.positionId =
                  o.longs === String
                    ? $util.Long.prototype.toString.call(m.positionId)
                    : o.longs === Number
                    ? new $util.LongBits(
                        m.positionId.low >>> 0,
                        m.positionId.high >>> 0
                      ).toNumber(true)
                    : m.positionId;
            }
            if (m.amount0 != null && m.hasOwnProperty("amount0")) {
              d.amount0 = m.amount0;
            }
            if (m.amount1 != null && m.hasOwnProperty("amount1")) {
              d.amount1 = m.amount1;
            }
            if (m.lockId != null && m.hasOwnProperty("lockId")) {
              if (typeof m.lockId === "number")
                d.lockId = o.longs === String ? String(m.lockId) : m.lockId;
              else
                d.lockId =
                  o.longs === String
                    ? $util.Long.prototype.toString.call(m.lockId)
                    : o.longs === Number
                    ? new $util.LongBits(
                        m.lockId.low >>> 0,
                        m.lockId.high >>> 0
                      ).toNumber(true)
                    : m.lockId;
            }
            if (m.newLiquidity != null && m.hasOwnProperty("newLiquidity")) {
              d.newLiquidity = m.newLiquidity;
            }
            return d;
          };
        MsgAddToConcentratedLiquiditySuperfluidPositionResponse.prototype.toJSON =
          function toJSON() {
            return this.constructor.toObject(
              this,
              $protobuf.util.toJSONOptions
            );
          };
        return MsgAddToConcentratedLiquiditySuperfluidPositionResponse;
      })();
    return superfluid;
  })();
  osmosis.gamm = (function () {
    const gamm = {};
    gamm.v1beta1 = (function () {
      const v1beta1 = {};
      v1beta1.Params = (function () {
        function Params(p) {
          this.poolCreationFee = [];
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        Params.prototype.poolCreationFee = $util.emptyArray;
        Params.create = function create(properties) {
          return new Params(properties);
        };
        Params.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.poolCreationFee != null && m.poolCreationFee.length) {
            for (var i = 0; i < m.poolCreationFee.length; ++i)
              $root.cosmos.base.v1beta1.Coin.encode(
                m.poolCreationFee[i],
                w.uint32(10).fork()
              ).ldelim();
          }
          return w;
        };
        Params.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.osmosis.gamm.v1beta1.Params();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                if (!(m.poolCreationFee && m.poolCreationFee.length))
                  m.poolCreationFee = [];
                m.poolCreationFee.push(
                  $root.cosmos.base.v1beta1.Coin.decode(r, r.uint32())
                );
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        Params.fromObject = function fromObject(d) {
          if (d instanceof $root.osmosis.gamm.v1beta1.Params) return d;
          var m = new $root.osmosis.gamm.v1beta1.Params();
          if (d.poolCreationFee) {
            if (!Array.isArray(d.poolCreationFee))
              throw TypeError(
                ".osmosis.gamm.v1beta1.Params.poolCreationFee: array expected"
              );
            m.poolCreationFee = [];
            for (var i = 0; i < d.poolCreationFee.length; ++i) {
              if (typeof d.poolCreationFee[i] !== "object")
                throw TypeError(
                  ".osmosis.gamm.v1beta1.Params.poolCreationFee: object expected"
                );
              m.poolCreationFee[i] = $root.cosmos.base.v1beta1.Coin.fromObject(
                d.poolCreationFee[i]
              );
            }
          }
          return m;
        };
        Params.toObject = function toObject(m, o) {
          if (!o) o = {};
          var d = {};
          if (o.arrays || o.defaults) {
            d.poolCreationFee = [];
          }
          if (m.poolCreationFee && m.poolCreationFee.length) {
            d.poolCreationFee = [];
            for (var j = 0; j < m.poolCreationFee.length; ++j) {
              d.poolCreationFee[j] = $root.cosmos.base.v1beta1.Coin.toObject(
                m.poolCreationFee[j],
                o
              );
            }
          }
          return d;
        };
        Params.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return Params;
      })();
      v1beta1.GenesisState = (function () {
        function GenesisState(p) {
          this.pools = [];
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        GenesisState.prototype.pools = $util.emptyArray;
        GenesisState.prototype.nextPoolNumber = $util.Long
          ? $util.Long.fromBits(0, 0, true)
          : 0;
        GenesisState.prototype.params = null;
        GenesisState.prototype.migrationRecords = null;
        GenesisState.create = function create(properties) {
          return new GenesisState(properties);
        };
        GenesisState.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.pools != null && m.pools.length) {
            for (var i = 0; i < m.pools.length; ++i)
              $root.google.protobuf.Any.encode(
                m.pools[i],
                w.uint32(10).fork()
              ).ldelim();
          }
          if (
            m.nextPoolNumber != null &&
            Object.hasOwnProperty.call(m, "nextPoolNumber")
          )
            w.uint32(16).uint64(m.nextPoolNumber);
          if (m.params != null && Object.hasOwnProperty.call(m, "params"))
            $root.osmosis.gamm.v1beta1.Params.encode(
              m.params,
              w.uint32(26).fork()
            ).ldelim();
          if (
            m.migrationRecords != null &&
            Object.hasOwnProperty.call(m, "migrationRecords")
          )
            $root.osmosis.gamm.v1beta1.MigrationRecords.encode(
              m.migrationRecords,
              w.uint32(34).fork()
            ).ldelim();
          return w;
        };
        GenesisState.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.osmosis.gamm.v1beta1.GenesisState();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                if (!(m.pools && m.pools.length)) m.pools = [];
                m.pools.push($root.google.protobuf.Any.decode(r, r.uint32()));
                break;
              case 2:
                m.nextPoolNumber = r.uint64();
                break;
              case 3:
                m.params = $root.osmosis.gamm.v1beta1.Params.decode(
                  r,
                  r.uint32()
                );
                break;
              case 4:
                m.migrationRecords =
                  $root.osmosis.gamm.v1beta1.MigrationRecords.decode(
                    r,
                    r.uint32()
                  );
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        GenesisState.fromObject = function fromObject(d) {
          if (d instanceof $root.osmosis.gamm.v1beta1.GenesisState) return d;
          var m = new $root.osmosis.gamm.v1beta1.GenesisState();
          if (d.pools) {
            if (!Array.isArray(d.pools))
              throw TypeError(
                ".osmosis.gamm.v1beta1.GenesisState.pools: array expected"
              );
            m.pools = [];
            for (var i = 0; i < d.pools.length; ++i) {
              if (typeof d.pools[i] !== "object")
                throw TypeError(
                  ".osmosis.gamm.v1beta1.GenesisState.pools: object expected"
                );
              m.pools[i] = $root.google.protobuf.Any.fromObject(d.pools[i]);
            }
          }
          if (d.nextPoolNumber != null) {
            if ($util.Long)
              (m.nextPoolNumber = $util.Long.fromValue(
                d.nextPoolNumber
              )).unsigned = true;
            else if (typeof d.nextPoolNumber === "string")
              m.nextPoolNumber = parseInt(d.nextPoolNumber, 10);
            else if (typeof d.nextPoolNumber === "number")
              m.nextPoolNumber = d.nextPoolNumber;
            else if (typeof d.nextPoolNumber === "object")
              m.nextPoolNumber = new $util.LongBits(
                d.nextPoolNumber.low >>> 0,
                d.nextPoolNumber.high >>> 0
              ).toNumber(true);
          }
          if (d.params != null) {
            if (typeof d.params !== "object")
              throw TypeError(
                ".osmosis.gamm.v1beta1.GenesisState.params: object expected"
              );
            m.params = $root.osmosis.gamm.v1beta1.Params.fromObject(d.params);
          }
          if (d.migrationRecords != null) {
            if (typeof d.migrationRecords !== "object")
              throw TypeError(
                ".osmosis.gamm.v1beta1.GenesisState.migrationRecords: object expected"
              );
            m.migrationRecords =
              $root.osmosis.gamm.v1beta1.MigrationRecords.fromObject(
                d.migrationRecords
              );
          }
          return m;
        };
        GenesisState.toObject = function toObject(m, o) {
          if (!o) o = {};
          var d = {};
          if (o.arrays || o.defaults) {
            d.pools = [];
          }
          if (o.defaults) {
            if ($util.Long) {
              var n = new $util.Long(0, 0, true);
              d.nextPoolNumber =
                o.longs === String
                  ? n.toString()
                  : o.longs === Number
                  ? n.toNumber()
                  : n;
            } else d.nextPoolNumber = o.longs === String ? "0" : 0;
            d.params = null;
            d.migrationRecords = null;
          }
          if (m.pools && m.pools.length) {
            d.pools = [];
            for (var j = 0; j < m.pools.length; ++j) {
              d.pools[j] = $root.google.protobuf.Any.toObject(m.pools[j], o);
            }
          }
          if (m.nextPoolNumber != null && m.hasOwnProperty("nextPoolNumber")) {
            if (typeof m.nextPoolNumber === "number")
              d.nextPoolNumber =
                o.longs === String
                  ? String(m.nextPoolNumber)
                  : m.nextPoolNumber;
            else
              d.nextPoolNumber =
                o.longs === String
                  ? $util.Long.prototype.toString.call(m.nextPoolNumber)
                  : o.longs === Number
                  ? new $util.LongBits(
                      m.nextPoolNumber.low >>> 0,
                      m.nextPoolNumber.high >>> 0
                    ).toNumber(true)
                  : m.nextPoolNumber;
          }
          if (m.params != null && m.hasOwnProperty("params")) {
            d.params = $root.osmosis.gamm.v1beta1.Params.toObject(m.params, o);
          }
          if (
            m.migrationRecords != null &&
            m.hasOwnProperty("migrationRecords")
          ) {
            d.migrationRecords =
              $root.osmosis.gamm.v1beta1.MigrationRecords.toObject(
                m.migrationRecords,
                o
              );
          }
          return d;
        };
        GenesisState.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return GenesisState;
      })();
      v1beta1.MigrationRecords = (function () {
        function MigrationRecords(p) {
          this.balancerToConcentratedPoolLinks = [];
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        MigrationRecords.prototype.balancerToConcentratedPoolLinks =
          $util.emptyArray;
        MigrationRecords.create = function create(properties) {
          return new MigrationRecords(properties);
        };
        MigrationRecords.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (
            m.balancerToConcentratedPoolLinks != null &&
            m.balancerToConcentratedPoolLinks.length
          ) {
            for (var i = 0; i < m.balancerToConcentratedPoolLinks.length; ++i)
              $root.osmosis.gamm.v1beta1.BalancerToConcentratedPoolLink.encode(
                m.balancerToConcentratedPoolLinks[i],
                w.uint32(10).fork()
              ).ldelim();
          }
          return w;
        };
        MigrationRecords.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.osmosis.gamm.v1beta1.MigrationRecords();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                if (
                  !(
                    m.balancerToConcentratedPoolLinks &&
                    m.balancerToConcentratedPoolLinks.length
                  )
                )
                  m.balancerToConcentratedPoolLinks = [];
                m.balancerToConcentratedPoolLinks.push(
                  $root.osmosis.gamm.v1beta1.BalancerToConcentratedPoolLink.decode(
                    r,
                    r.uint32()
                  )
                );
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        MigrationRecords.fromObject = function fromObject(d) {
          if (d instanceof $root.osmosis.gamm.v1beta1.MigrationRecords)
            return d;
          var m = new $root.osmosis.gamm.v1beta1.MigrationRecords();
          if (d.balancerToConcentratedPoolLinks) {
            if (!Array.isArray(d.balancerToConcentratedPoolLinks))
              throw TypeError(
                ".osmosis.gamm.v1beta1.MigrationRecords.balancerToConcentratedPoolLinks: array expected"
              );
            m.balancerToConcentratedPoolLinks = [];
            for (var i = 0; i < d.balancerToConcentratedPoolLinks.length; ++i) {
              if (typeof d.balancerToConcentratedPoolLinks[i] !== "object")
                throw TypeError(
                  ".osmosis.gamm.v1beta1.MigrationRecords.balancerToConcentratedPoolLinks: object expected"
                );
              m.balancerToConcentratedPoolLinks[i] =
                $root.osmosis.gamm.v1beta1.BalancerToConcentratedPoolLink.fromObject(
                  d.balancerToConcentratedPoolLinks[i]
                );
            }
          }
          return m;
        };
        MigrationRecords.toObject = function toObject(m, o) {
          if (!o) o = {};
          var d = {};
          if (o.arrays || o.defaults) {
            d.balancerToConcentratedPoolLinks = [];
          }
          if (
            m.balancerToConcentratedPoolLinks &&
            m.balancerToConcentratedPoolLinks.length
          ) {
            d.balancerToConcentratedPoolLinks = [];
            for (var j = 0; j < m.balancerToConcentratedPoolLinks.length; ++j) {
              d.balancerToConcentratedPoolLinks[j] =
                $root.osmosis.gamm.v1beta1.BalancerToConcentratedPoolLink.toObject(
                  m.balancerToConcentratedPoolLinks[j],
                  o
                );
            }
          }
          return d;
        };
        MigrationRecords.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return MigrationRecords;
      })();
      v1beta1.BalancerToConcentratedPoolLink = (function () {
        function BalancerToConcentratedPoolLink(p) {
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        BalancerToConcentratedPoolLink.prototype.balancerPoolId = $util.Long
          ? $util.Long.fromBits(0, 0, true)
          : 0;
        BalancerToConcentratedPoolLink.prototype.clPoolId = $util.Long
          ? $util.Long.fromBits(0, 0, true)
          : 0;
        BalancerToConcentratedPoolLink.create = function create(properties) {
          return new BalancerToConcentratedPoolLink(properties);
        };
        BalancerToConcentratedPoolLink.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (
            m.balancerPoolId != null &&
            Object.hasOwnProperty.call(m, "balancerPoolId")
          )
            w.uint32(8).uint64(m.balancerPoolId);
          if (m.clPoolId != null && Object.hasOwnProperty.call(m, "clPoolId"))
            w.uint32(16).uint64(m.clPoolId);
          return w;
        };
        BalancerToConcentratedPoolLink.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.osmosis.gamm.v1beta1.BalancerToConcentratedPoolLink();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.balancerPoolId = r.uint64();
                break;
              case 2:
                m.clPoolId = r.uint64();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        BalancerToConcentratedPoolLink.fromObject = function fromObject(d) {
          if (
            d instanceof
            $root.osmosis.gamm.v1beta1.BalancerToConcentratedPoolLink
          )
            return d;
          var m =
            new $root.osmosis.gamm.v1beta1.BalancerToConcentratedPoolLink();
          if (d.balancerPoolId != null) {
            if ($util.Long)
              (m.balancerPoolId = $util.Long.fromValue(
                d.balancerPoolId
              )).unsigned = true;
            else if (typeof d.balancerPoolId === "string")
              m.balancerPoolId = parseInt(d.balancerPoolId, 10);
            else if (typeof d.balancerPoolId === "number")
              m.balancerPoolId = d.balancerPoolId;
            else if (typeof d.balancerPoolId === "object")
              m.balancerPoolId = new $util.LongBits(
                d.balancerPoolId.low >>> 0,
                d.balancerPoolId.high >>> 0
              ).toNumber(true);
          }
          if (d.clPoolId != null) {
            if ($util.Long)
              (m.clPoolId = $util.Long.fromValue(d.clPoolId)).unsigned = true;
            else if (typeof d.clPoolId === "string")
              m.clPoolId = parseInt(d.clPoolId, 10);
            else if (typeof d.clPoolId === "number") m.clPoolId = d.clPoolId;
            else if (typeof d.clPoolId === "object")
              m.clPoolId = new $util.LongBits(
                d.clPoolId.low >>> 0,
                d.clPoolId.high >>> 0
              ).toNumber(true);
          }
          return m;
        };
        BalancerToConcentratedPoolLink.toObject = function toObject(m, o) {
          if (!o) o = {};
          var d = {};
          if (o.defaults) {
            if ($util.Long) {
              var n = new $util.Long(0, 0, true);
              d.balancerPoolId =
                o.longs === String
                  ? n.toString()
                  : o.longs === Number
                  ? n.toNumber()
                  : n;
            } else d.balancerPoolId = o.longs === String ? "0" : 0;
            if ($util.Long) {
              var n = new $util.Long(0, 0, true);
              d.clPoolId =
                o.longs === String
                  ? n.toString()
                  : o.longs === Number
                  ? n.toNumber()
                  : n;
            } else d.clPoolId = o.longs === String ? "0" : 0;
          }
          if (m.balancerPoolId != null && m.hasOwnProperty("balancerPoolId")) {
            if (typeof m.balancerPoolId === "number")
              d.balancerPoolId =
                o.longs === String
                  ? String(m.balancerPoolId)
                  : m.balancerPoolId;
            else
              d.balancerPoolId =
                o.longs === String
                  ? $util.Long.prototype.toString.call(m.balancerPoolId)
                  : o.longs === Number
                  ? new $util.LongBits(
                      m.balancerPoolId.low >>> 0,
                      m.balancerPoolId.high >>> 0
                    ).toNumber(true)
                  : m.balancerPoolId;
          }
          if (m.clPoolId != null && m.hasOwnProperty("clPoolId")) {
            if (typeof m.clPoolId === "number")
              d.clPoolId = o.longs === String ? String(m.clPoolId) : m.clPoolId;
            else
              d.clPoolId =
                o.longs === String
                  ? $util.Long.prototype.toString.call(m.clPoolId)
                  : o.longs === Number
                  ? new $util.LongBits(
                      m.clPoolId.low >>> 0,
                      m.clPoolId.high >>> 0
                    ).toNumber(true)
                  : m.clPoolId;
          }
          return d;
        };
        BalancerToConcentratedPoolLink.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return BalancerToConcentratedPoolLink;
      })();
      v1beta1.ReplaceMigrationRecordsProposal = (function () {
        function ReplaceMigrationRecordsProposal(p) {
          this.records = [];
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        ReplaceMigrationRecordsProposal.prototype.title = "";
        ReplaceMigrationRecordsProposal.prototype.description = "";
        ReplaceMigrationRecordsProposal.prototype.records = $util.emptyArray;
        ReplaceMigrationRecordsProposal.create = function create(properties) {
          return new ReplaceMigrationRecordsProposal(properties);
        };
        ReplaceMigrationRecordsProposal.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.title != null && Object.hasOwnProperty.call(m, "title"))
            w.uint32(10).string(m.title);
          if (
            m.description != null &&
            Object.hasOwnProperty.call(m, "description")
          )
            w.uint32(18).string(m.description);
          if (m.records != null && m.records.length) {
            for (var i = 0; i < m.records.length; ++i)
              $root.osmosis.gamm.v1beta1.BalancerToConcentratedPoolLink.encode(
                m.records[i],
                w.uint32(26).fork()
              ).ldelim();
          }
          return w;
        };
        ReplaceMigrationRecordsProposal.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m =
              new $root.osmosis.gamm.v1beta1.ReplaceMigrationRecordsProposal();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.title = r.string();
                break;
              case 2:
                m.description = r.string();
                break;
              case 3:
                if (!(m.records && m.records.length)) m.records = [];
                m.records.push(
                  $root.osmosis.gamm.v1beta1.BalancerToConcentratedPoolLink.decode(
                    r,
                    r.uint32()
                  )
                );
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        ReplaceMigrationRecordsProposal.fromObject = function fromObject(d) {
          if (
            d instanceof
            $root.osmosis.gamm.v1beta1.ReplaceMigrationRecordsProposal
          )
            return d;
          var m =
            new $root.osmosis.gamm.v1beta1.ReplaceMigrationRecordsProposal();
          if (d.title != null) {
            m.title = String(d.title);
          }
          if (d.description != null) {
            m.description = String(d.description);
          }
          if (d.records) {
            if (!Array.isArray(d.records))
              throw TypeError(
                ".osmosis.gamm.v1beta1.ReplaceMigrationRecordsProposal.records: array expected"
              );
            m.records = [];
            for (var i = 0; i < d.records.length; ++i) {
              if (typeof d.records[i] !== "object")
                throw TypeError(
                  ".osmosis.gamm.v1beta1.ReplaceMigrationRecordsProposal.records: object expected"
                );
              m.records[i] =
                $root.osmosis.gamm.v1beta1.BalancerToConcentratedPoolLink.fromObject(
                  d.records[i]
                );
            }
          }
          return m;
        };
        ReplaceMigrationRecordsProposal.toObject = function toObject(m, o) {
          if (!o) o = {};
          var d = {};
          if (o.arrays || o.defaults) {
            d.records = [];
          }
          if (o.defaults) {
            d.title = "";
            d.description = "";
          }
          if (m.title != null && m.hasOwnProperty("title")) {
            d.title = m.title;
          }
          if (m.description != null && m.hasOwnProperty("description")) {
            d.description = m.description;
          }
          if (m.records && m.records.length) {
            d.records = [];
            for (var j = 0; j < m.records.length; ++j) {
              d.records[j] =
                $root.osmosis.gamm.v1beta1.BalancerToConcentratedPoolLink.toObject(
                  m.records[j],
                  o
                );
            }
          }
          return d;
        };
        ReplaceMigrationRecordsProposal.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return ReplaceMigrationRecordsProposal;
      })();
      v1beta1.UpdateMigrationRecordsProposal = (function () {
        function UpdateMigrationRecordsProposal(p) {
          this.records = [];
          if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
              if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        UpdateMigrationRecordsProposal.prototype.title = "";
        UpdateMigrationRecordsProposal.prototype.description = "";
        UpdateMigrationRecordsProposal.prototype.records = $util.emptyArray;
        UpdateMigrationRecordsProposal.create = function create(properties) {
          return new UpdateMigrationRecordsProposal(properties);
        };
        UpdateMigrationRecordsProposal.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.title != null && Object.hasOwnProperty.call(m, "title"))
            w.uint32(10).string(m.title);
          if (
            m.description != null &&
            Object.hasOwnProperty.call(m, "description")
          )
            w.uint32(18).string(m.description);
          if (m.records != null && m.records.length) {
            for (var i = 0; i < m.records.length; ++i)
              $root.osmosis.gamm.v1beta1.BalancerToConcentratedPoolLink.encode(
                m.records[i],
                w.uint32(26).fork()
              ).ldelim();
          }
          return w;
        };
        UpdateMigrationRecordsProposal.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.osmosis.gamm.v1beta1.UpdateMigrationRecordsProposal();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.title = r.string();
                break;
              case 2:
                m.description = r.string();
                break;
              case 3:
                if (!(m.records && m.records.length)) m.records = [];
                m.records.push(
                  $root.osmosis.gamm.v1beta1.BalancerToConcentratedPoolLink.decode(
                    r,
                    r.uint32()
                  )
                );
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        UpdateMigrationRecordsProposal.fromObject = function fromObject(d) {
          if (
            d instanceof
            $root.osmosis.gamm.v1beta1.UpdateMigrationRecordsProposal
          )
            return d;
          var m =
            new $root.osmosis.gamm.v1beta1.UpdateMigrationRecordsProposal();
          if (d.title != null) {
            m.title = String(d.title);
          }
          if (d.description != null) {
            m.description = String(d.description);
          }
          if (d.records) {
            if (!Array.isArray(d.records))
              throw TypeError(
                ".osmosis.gamm.v1beta1.UpdateMigrationRecordsProposal.records: array expected"
              );
            m.records = [];
            for (var i = 0; i < d.records.length; ++i) {
              if (typeof d.records[i] !== "object")
                throw TypeError(
                  ".osmosis.gamm.v1beta1.UpdateMigrationRecordsProposal.records: object expected"
                );
              m.records[i] =
                $root.osmosis.gamm.v1beta1.BalancerToConcentratedPoolLink.fromObject(
                  d.records[i]
                );
            }
          }
          return m;
        };
        UpdateMigrationRecordsProposal.toObject = function toObject(m, o) {
          if (!o) o = {};
          var d = {};
          if (o.arrays || o.defaults) {
            d.records = [];
          }
          if (o.defaults) {
            d.title = "";
            d.description = "";
          }
          if (m.title != null && m.hasOwnProperty("title")) {
            d.title = m.title;
          }
          if (m.description != null && m.hasOwnProperty("description")) {
            d.description = m.description;
          }
          if (m.records && m.records.length) {
            d.records = [];
            for (var j = 0; j < m.records.length; ++j) {
              d.records[j] =
                $root.osmosis.gamm.v1beta1.BalancerToConcentratedPoolLink.toObject(
                  m.records[j],
                  o
                );
            }
          }
          return d;
        };
        UpdateMigrationRecordsProposal.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return UpdateMigrationRecordsProposal;
      })();
      return v1beta1;
    })();
    return gamm;
  })();
  return osmosis;
})();
module.exports = $root;
