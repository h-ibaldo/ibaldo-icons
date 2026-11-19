import type { DefineComponent } from 'vue';

export interface CropSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CropSquare: DefineComponent<CropSquareProps>;

export default CropSquare;
export { CropSquare };
