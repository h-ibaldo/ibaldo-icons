import type { DefineComponent } from 'vue';

export interface ClockDottedArcProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockDottedArc: DefineComponent<ClockDottedArcProps>;

export default ClockDottedArc;
export { ClockDottedArc };
