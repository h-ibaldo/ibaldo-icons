import type { DefineComponent } from 'vue';

export interface FullscreenSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FullscreenSquare: DefineComponent<FullscreenSquareProps>;

export default FullscreenSquare;
export { FullscreenSquare };
