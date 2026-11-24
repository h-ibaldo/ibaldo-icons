import type { DefineComponent } from 'vue';

export interface ClockNumberTwoProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockNumberTwo: DefineComponent<ClockNumberTwoProps>;

export default ClockNumberTwo;
export { ClockNumberTwo };
