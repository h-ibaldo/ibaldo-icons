import type { DefineComponent } from 'vue';

export interface ChalkboardChartNotchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChalkboardChartNotch: DefineComponent<ChalkboardChartNotchProps>;

export default ChalkboardChartNotch;
export { ChalkboardChartNotch };
