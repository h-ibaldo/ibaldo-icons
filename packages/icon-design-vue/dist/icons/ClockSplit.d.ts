import type { DefineComponent } from 'vue';

export interface ClockSplitProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockSplit: DefineComponent<ClockSplitProps>;

export default ClockSplit;
export { ClockSplit };
