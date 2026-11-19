import type { DefineComponent } from 'vue';

export interface ClockMinusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockMinus: DefineComponent<ClockMinusProps>;

export default ClockMinus;
export { ClockMinus };
