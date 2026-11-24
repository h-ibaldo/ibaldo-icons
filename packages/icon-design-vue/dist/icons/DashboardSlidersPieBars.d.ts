import type { DefineComponent } from 'vue';

export interface DashboardSlidersPieBarsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DashboardSlidersPieBars: DefineComponent<DashboardSlidersPieBarsProps>;

export default DashboardSlidersPieBars;
export { DashboardSlidersPieBars };
