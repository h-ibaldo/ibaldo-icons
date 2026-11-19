import type { DefineComponent } from 'vue';

export interface ClockArrowLeftRightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockArrowLeftRight: DefineComponent<ClockArrowLeftRightProps>;

export default ClockArrowLeftRight;
export { ClockArrowLeftRight };
