import type { DefineComponent } from 'vue';

export interface ClockDashedHalfProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockDashedHalf: DefineComponent<ClockDashedHalfProps>;

export default ClockDashedHalf;
export { ClockDashedHalf };
