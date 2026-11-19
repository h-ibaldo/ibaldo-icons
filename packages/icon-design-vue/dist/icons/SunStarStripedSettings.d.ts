import type { DefineComponent } from 'vue';

export interface SunStarStripedSettingsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SunStarStripedSettings: DefineComponent<SunStarStripedSettingsProps>;

export default SunStarStripedSettings;
export { SunStarStripedSettings };
