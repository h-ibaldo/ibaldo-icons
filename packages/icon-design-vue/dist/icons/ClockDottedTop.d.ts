import type { DefineComponent } from 'vue';

export interface ClockDottedTopProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockDottedTop: DefineComponent<ClockDottedTopProps>;

export default ClockDottedTop;
export { ClockDottedTop };
