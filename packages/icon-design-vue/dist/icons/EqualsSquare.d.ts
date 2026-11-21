import type { DefineComponent } from 'vue';

export interface EqualsSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const EqualsSquare: DefineComponent<EqualsSquareProps>;

export default EqualsSquare;
export { EqualsSquare };
