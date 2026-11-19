import type { DefineComponent } from 'vue';

export interface CompassSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CompassSquare: DefineComponent<CompassSquareProps>;

export default CompassSquare;
export { CompassSquare };
