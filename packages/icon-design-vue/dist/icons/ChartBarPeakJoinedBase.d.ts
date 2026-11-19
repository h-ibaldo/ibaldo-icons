import type { DefineComponent } from 'vue';

export interface ChartBarPeakJoinedBaseProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartBarPeakJoinedBase: DefineComponent<ChartBarPeakJoinedBaseProps>;

export default ChartBarPeakJoinedBase;
export { ChartBarPeakJoinedBase };
