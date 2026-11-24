import type { DefineComponent } from 'vue';

export interface ClockTurnLeftSmallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockTurnLeftSmall: DefineComponent<ClockTurnLeftSmallProps>;

export default ClockTurnLeftSmall;
export { ClockTurnLeftSmall };
