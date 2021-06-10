// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class EncryptedNote extends ethereum.Event {
  get params(): EncryptedNote__Params {
    return new EncryptedNote__Params(this);
  }
}

export class EncryptedNote__Params {
  _event: EncryptedNote;

  constructor(event: EncryptedNote) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get encryptedNote(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }
}

export class Proxy extends ethereum.SmartContract {
  static bind(address: Address): Proxy {
    return new Proxy("Proxy", address);
  }
}
