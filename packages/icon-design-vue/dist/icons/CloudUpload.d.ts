import type { DefineComponent } from 'vue';

export interface CloudUploadProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudUpload: DefineComponent<CloudUploadProps>;

export default CloudUpload;
export { CloudUpload };
