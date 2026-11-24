import type { DefineComponent } from 'vue';

export interface ChartRadarProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartRadar: DefineComponent<ChartRadarProps>;

export default ChartRadar;
export { ChartRadar };
