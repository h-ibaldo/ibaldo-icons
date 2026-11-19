import type { DefineComponent } from 'vue';

export interface UploadSquareOpenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UploadSquareOpen: DefineComponent<UploadSquareOpenProps>;

export default UploadSquareOpen;
export { UploadSquareOpen };
