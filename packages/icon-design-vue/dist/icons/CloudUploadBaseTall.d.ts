import type { DefineComponent } from 'vue';

export interface CloudUploadBaseTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudUploadBaseTall: DefineComponent<CloudUploadBaseTallProps>;

export default CloudUploadBaseTall;
export { CloudUploadBaseTall };
