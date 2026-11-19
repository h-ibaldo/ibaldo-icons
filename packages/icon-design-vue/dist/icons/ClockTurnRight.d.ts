import type { DefineComponent } from 'vue';

export interface ClockTurnRightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockTurnRight: DefineComponent<ClockTurnRightProps>;

export default ClockTurnRight;
export { ClockTurnRight };
