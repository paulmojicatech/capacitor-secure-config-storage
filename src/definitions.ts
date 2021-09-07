export interface SecureConfigStoragePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;

  getValueFromConfig(options: {key:string}): Promise<{ result: string}>;
  storeConfigValue(options: {key:string}): Promise<void>;

}
