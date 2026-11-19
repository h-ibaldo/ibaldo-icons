import type { DefineComponent } from 'vue';

export interface CropMarksSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CropMarksSquare: DefineComponent<CropMarksSquareProps>;

export default CropMarksSquare;
export { CropMarksSquare };
