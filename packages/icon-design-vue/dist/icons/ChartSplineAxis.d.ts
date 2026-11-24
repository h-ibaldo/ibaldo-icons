import type { DefineComponent } from 'vue';

export interface ChartSplineAxisProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartSplineAxis: DefineComponent<ChartSplineAxisProps>;

export default ChartSplineAxis;
export { ChartSplineAxis };
