import type { DefineComponent } from 'vue';

export interface ClockDashedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockDashed: DefineComponent<ClockDashedProps>;

export default ClockDashed;
export { ClockDashed };
