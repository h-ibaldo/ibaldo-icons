import type { DefineComponent } from 'vue';

export interface ClockDashedQuarterProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockDashedQuarter: DefineComponent<ClockDashedQuarterProps>;

export default ClockDashedQuarter;
export { ClockDashedQuarter };
