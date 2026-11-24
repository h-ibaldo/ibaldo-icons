import type { DefineComponent } from 'vue';

export interface ChartPieSliceProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartPieSlice: DefineComponent<ChartPieSliceProps>;

export default ChartPieSlice;
export { ChartPieSlice };
