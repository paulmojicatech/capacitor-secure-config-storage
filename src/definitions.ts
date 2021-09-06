export interface SecureConfigStoragePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;

  getConfigValue(key: string): Promise<{ value: string}>;
  storeConfigValue(key: string): Promise<void>;

}
