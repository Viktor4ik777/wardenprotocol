//@ts-nocheck
import * as _110 from "./act/module/module.js";
import * as _111 from "./act/v1beta1/action.js";
import * as _112 from "./act/v1beta1/events.js";
import * as _113 from "./act/v1beta1/genesis.js";
import * as _114 from "./act/v1beta1/params.js";
import * as _115 from "./act/v1beta1/query.js";
import * as _116 from "./act/v1beta1/rule.js";
import * as _117 from "./act/v1beta1/tx.js";
import * as _118 from "./gmp/genesis.js";
import * as _119 from "./gmp/gmp.js";
import * as _120 from "./gmp/query.js";
import * as _121 from "./gmp/tx.js";
import * as _122 from "./warden/module/module.js";
import * as _123 from "./warden/v1beta3/events.js";
import * as _124 from "./warden/v1beta3/genesis.js";
import * as _125 from "./warden/v1beta3/key.js";
import * as _126 from "./warden/v1beta3/keychain.js";
import * as _127 from "./warden/v1beta3/params.js";
import * as _128 from "./warden/v1beta3/query.js";
import * as _129 from "./warden/v1beta3/signature.js";
import * as _130 from "./warden/v1beta3/space.js";
import * as _131 from "./warden/v1beta3/tx.js";
import * as _210 from "./act/v1beta1/tx.amino.js";
import * as _211 from "./gmp/tx.amino.js";
import * as _212 from "./warden/v1beta3/tx.amino.js";
import * as _213 from "./act/v1beta1/tx.registry.js";
import * as _214 from "./gmp/tx.registry.js";
import * as _215 from "./warden/v1beta3/tx.registry.js";
import * as _216 from "./act/v1beta1/query.lcd.js";
import * as _217 from "./gmp/query.lcd.js";
import * as _218 from "./warden/v1beta3/query.lcd.js";
import * as _219 from "./act/v1beta1/query.rpc.Query.js";
import * as _220 from "./gmp/query.rpc.Query.js";
import * as _221 from "./warden/v1beta3/query.rpc.Query.js";
import * as _222 from "./act/v1beta1/tx.rpc.msg.js";
import * as _223 from "./gmp/tx.rpc.msg.js";
import * as _224 from "./warden/v1beta3/tx.rpc.msg.js";
import * as _234 from "./lcd.js";
import * as _235 from "./rpc.query.js";
import * as _236 from "./rpc.tx.js";
export namespace warden {
  export namespace act {
    export const module = {
      ..._110
    };
    export const v1beta1 = {
      ..._111,
      ..._112,
      ..._113,
      ..._114,
      ..._115,
      ..._116,
      ..._117,
      ..._210,
      ..._213,
      ..._216,
      ..._219,
      ..._222
    };
  }
  export const gmp = {
    ..._118,
    ..._119,
    ..._120,
    ..._121,
    ..._211,
    ..._214,
    ..._217,
    ..._220,
    ..._223
  };
  export namespace warden {
    export const module = {
      ..._122
    };
    export const v1beta3 = {
      ..._123,
      ..._124,
      ..._125,
      ..._126,
      ..._127,
      ..._128,
      ..._129,
      ..._130,
      ..._131,
      ..._212,
      ..._215,
      ..._218,
      ..._221,
      ..._224
    };
  }
  export const ClientFactory = {
    ..._234,
    ..._235,
    ..._236
  };
}