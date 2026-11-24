import type { DefineComponent } from 'vue';

export interface CloudUploadLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudUploadLarge: DefineComponent<CloudUploadLargeProps>;

export default CloudUploadLarge;
export { CloudUploadLarge };
