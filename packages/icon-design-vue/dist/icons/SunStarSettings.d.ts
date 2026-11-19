import type { DefineComponent } from 'vue';

export interface SunStarSettingsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SunStarSettings: DefineComponent<SunStarSettingsProps>;

export default SunStarSettings;
export { SunStarSettings };
