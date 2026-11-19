import type { DefineComponent } from 'vue';

export interface SquareRoundedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquareRounded: DefineComponent<SquareRoundedProps>;

export default SquareRounded;
export { SquareRounded };
