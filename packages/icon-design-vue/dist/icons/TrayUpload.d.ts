import type { DefineComponent } from 'vue';

export interface TrayUploadProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrayUpload: DefineComponent<TrayUploadProps>;

export default TrayUpload;
export { TrayUpload };
