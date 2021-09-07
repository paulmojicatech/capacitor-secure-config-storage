import { WebPlugin } from '@capacitor/core';

import type { SecureConfigStoragePlugin } from './definitions';

export class SecureConfigStorageWeb
  extends WebPlugin
  implements SecureConfigStoragePlugin {
  
    async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async getValueFromConfig(options: {key: string}): Promise<{result: string}> {
    return Promise.resolve({ result: options.key });
  }

  async storeConfigValue(options: { key: string }): Promise<void> {
    console.log(options.key);
    return Promise.resolve();
  }
}


