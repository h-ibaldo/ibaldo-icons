import type { DefineComponent } from 'vue';

export interface UploadSquareNotchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UploadSquareNotch: DefineComponent<UploadSquareNotchProps>;

export default UploadSquareNotch;
export { UploadSquareNotch };
