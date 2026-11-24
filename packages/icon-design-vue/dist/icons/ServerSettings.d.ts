import type { DefineComponent } from 'vue';

export interface ServerSettingsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ServerSettings: DefineComponent<ServerSettingsProps>;

export default ServerSettings;
export { ServerSettings };
