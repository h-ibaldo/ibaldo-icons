import type { DefineComponent } from 'vue';

export interface CloudUploadLargeTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudUploadLargeTall: DefineComponent<CloudUploadLargeTallProps>;

export default CloudUploadLargeTall;
export { CloudUploadLargeTall };
