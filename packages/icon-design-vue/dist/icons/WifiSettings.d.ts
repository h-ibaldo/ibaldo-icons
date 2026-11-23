import type { DefineComponent } from 'vue';

export interface WifiSettingsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WifiSettings: DefineComponent<WifiSettingsProps>;

export default WifiSettings;
export { WifiSettings };
