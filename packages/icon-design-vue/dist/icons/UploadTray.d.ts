import type { DefineComponent } from 'vue';

export interface UploadTrayProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UploadTray: DefineComponent<UploadTrayProps>;

export default UploadTray;
export { UploadTray };
