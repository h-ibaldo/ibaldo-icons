import type { DefineComponent } from 'vue';

export interface UploadSquareStackProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UploadSquareStack: DefineComponent<UploadSquareStackProps>;

export default UploadSquareStack;
export { UploadSquareStack };
