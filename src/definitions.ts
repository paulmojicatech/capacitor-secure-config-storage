export interface SecureConfigStoragePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
