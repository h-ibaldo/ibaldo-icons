import type { DefineComponent } from 'vue';

export interface UploadProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Upload: DefineComponent<UploadProps>;

export default Upload;
export { Upload };
