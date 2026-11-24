import type { DefineComponent } from 'vue';

export interface ClockArrowLeftProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockArrowLeft: DefineComponent<ClockArrowLeftProps>;

export default ClockArrowLeft;
export { ClockArrowLeft };
