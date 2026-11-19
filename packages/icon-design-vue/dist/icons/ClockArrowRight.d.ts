import type { DefineComponent } from 'vue';

export interface ClockArrowRightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockArrowRight: DefineComponent<ClockArrowRightProps>;

export default ClockArrowRight;
export { ClockArrowRight };
