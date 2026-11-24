import type { DefineComponent } from 'vue';

export interface UploadSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UploadSquare: DefineComponent<UploadSquareProps>;

export default UploadSquare;
export { UploadSquare };
