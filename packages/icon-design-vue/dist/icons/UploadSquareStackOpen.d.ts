import type { DefineComponent } from 'vue';

export interface UploadSquareStackOpenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UploadSquareStackOpen: DefineComponent<UploadSquareStackOpenProps>;

export default UploadSquareStackOpen;
export { UploadSquareStackOpen };
