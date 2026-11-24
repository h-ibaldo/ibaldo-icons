import type { DefineComponent } from 'vue';

export interface SunStarHalfSettingsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SunStarHalfSettings: DefineComponent<SunStarHalfSettingsProps>;

export default SunStarHalfSettings;
export { SunStarHalfSettings };
