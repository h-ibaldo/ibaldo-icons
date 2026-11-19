import type { DefineComponent } from 'vue';

export interface UploadTraySquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UploadTraySquare: DefineComponent<UploadTraySquareProps>;

export default UploadTraySquare;
export { UploadTraySquare };
