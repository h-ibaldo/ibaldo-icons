import type { DefineComponent } from 'vue';

export interface ClockArrowDownProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockArrowDown: DefineComponent<ClockArrowDownProps>;

export default ClockArrowDown;
export { ClockArrowDown };
