import type { DefineComponent } from 'vue';

export interface ClosedCaptionSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClosedCaptionSquare: DefineComponent<ClosedCaptionSquareProps>;

export default ClosedCaptionSquare;
export { ClosedCaptionSquare };
