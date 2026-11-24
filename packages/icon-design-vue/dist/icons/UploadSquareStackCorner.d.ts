import type { DefineComponent } from 'vue';

export interface UploadSquareStackCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UploadSquareStackCorner: DefineComponent<UploadSquareStackCornerProps>;

export default UploadSquareStackCorner;
export { UploadSquareStackCorner };
