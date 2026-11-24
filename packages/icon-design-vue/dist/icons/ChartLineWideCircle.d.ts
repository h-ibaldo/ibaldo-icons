import type { DefineComponent } from 'vue';

export interface ChartLineWideCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartLineWideCircle: DefineComponent<ChartLineWideCircleProps>;

export default ChartLineWideCircle;
export { ChartLineWideCircle };
