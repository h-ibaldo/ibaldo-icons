import type { DefineComponent } from 'vue';

export interface ChartBarPeakJoinedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartBarPeakJoined: DefineComponent<ChartBarPeakJoinedProps>;

export default ChartBarPeakJoined;
export { ChartBarPeakJoined };
