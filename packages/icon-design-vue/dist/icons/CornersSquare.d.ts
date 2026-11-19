import type { DefineComponent } from 'vue';

export interface CornersSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CornersSquare: DefineComponent<CornersSquareProps>;

export default CornersSquare;
export { CornersSquare };
