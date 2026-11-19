import type { DefineComponent } from 'vue';

export interface SquareEditXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquareEditX: DefineComponent<SquareEditXProps>;

export default SquareEditX;
export { SquareEditX };
