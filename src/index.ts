import { registerPlugin } from '@capacitor/core';

import type { SecureConfigStoragePlugin } from './definitions';

const SecureConfigStorage = registerPlugin<SecureConfigStoragePlugin>(
  'SecureConfigStorage',
  {
    web: () => import('./web').then(m => new m.SecureConfigStorageWeb()),
  },
);

export * from './definitions';
export { SecureConfigStorage };
