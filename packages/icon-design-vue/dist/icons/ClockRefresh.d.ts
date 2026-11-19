import type { DefineComponent } from 'vue';

export interface ClockRefreshProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockRefresh: DefineComponent<ClockRefreshProps>;

export default ClockRefresh;
export { ClockRefresh };
