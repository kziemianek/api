// Copyright 2017-2023 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AccountId, Hash } from '@polkadot/types/interfaces';

import { ApiPromise, toPromiseMethod } from '@polkadot/api';

import { Abi } from '../Abi/index.js';
import { Blueprint, Code, Contract } from '../base/index.js';

export class BlueprintPromise extends Blueprint<'promise'> {
  constructor (api: ApiPromise, abi: string | Record<string, unknown> | Abi, codeHash: string | Hash) {
    super(api, abi, codeHash, toPromiseMethod);
  }
}

export class CodePromise extends Code<'promise'> {
  constructor (api: ApiPromise, abi: string | Record<string, unknown> | Abi, wasm: Uint8Array | string | Buffer | null | undefined) {
    super(api, abi, wasm, toPromiseMethod);
  }
}

export class ContractPromise extends Contract<'promise'> {
  constructor (api: ApiPromise, abi: string | Record<string, unknown> | Abi, address: string | AccountId) {
    super(api, abi, address, toPromiseMethod);
  }
}
