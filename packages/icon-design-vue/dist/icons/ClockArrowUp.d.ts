import type { DefineComponent } from 'vue';

export interface ClockArrowUpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockArrowUp: DefineComponent<ClockArrowUpProps>;

export default ClockArrowUp;
export { ClockArrowUp };
