import type { DefineComponent } from 'vue';

export interface ClockDashedHalfLongProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockDashedHalfLong: DefineComponent<ClockDashedHalfLongProps>;

export default ClockDashedHalfLong;
export { ClockDashedHalfLong };
