export interface SecureConfigStoragePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;

  getValueFromConfig(options: {key:string}): Promise<{ result: string}>;
  seedDatabase(options: {
    scripts?: string[]
  }): Promise<{result: string}>

}
