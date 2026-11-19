import type { DefineComponent } from 'vue';

export interface ArrowClockwiseSettingsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ArrowClockwiseSettings: DefineComponent<ArrowClockwiseSettingsProps>;

export default ArrowClockwiseSettings;
export { ArrowClockwiseSettings };
