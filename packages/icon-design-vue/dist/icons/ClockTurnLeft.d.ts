import type { DefineComponent } from 'vue';

export interface ClockTurnLeftProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockTurnLeft: DefineComponent<ClockTurnLeftProps>;

export default ClockTurnLeft;
export { ClockTurnLeft };
