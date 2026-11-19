import type { DefineComponent } from 'vue';

export interface CloudUploadBaseProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudUploadBase: DefineComponent<CloudUploadBaseProps>;

export default CloudUploadBase;
export { CloudUploadBase };
