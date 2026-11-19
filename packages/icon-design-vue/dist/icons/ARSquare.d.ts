import type { DefineComponent } from 'vue';

export interface ARSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ARSquare: DefineComponent<ARSquareProps>;

export default ARSquare;
export { ARSquare };
