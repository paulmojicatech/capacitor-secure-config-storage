export interface SecureConfigStoragePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;

  getValueFromConfig(key: string): Promise<{ result: string}>;
  storeConfigValue(key: string): Promise<void>;

}
