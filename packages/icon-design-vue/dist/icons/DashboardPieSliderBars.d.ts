import type { DefineComponent } from 'vue';

export interface DashboardPieSliderBarsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DashboardPieSliderBars: DefineComponent<DashboardPieSliderBarsProps>;

export default DashboardPieSliderBars;
export { DashboardPieSliderBars };
