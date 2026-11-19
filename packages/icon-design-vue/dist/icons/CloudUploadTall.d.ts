import type { DefineComponent } from 'vue';

export interface CloudUploadTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudUploadTall: DefineComponent<CloudUploadTallProps>;

export default CloudUploadTall;
export { CloudUploadTall };
