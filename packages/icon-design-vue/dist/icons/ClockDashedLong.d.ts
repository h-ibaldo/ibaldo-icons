import type { DefineComponent } from 'vue';

export interface ClockDashedLongProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockDashedLong: DefineComponent<ClockDashedLongProps>;

export default ClockDashedLong;
export { ClockDashedLong };
