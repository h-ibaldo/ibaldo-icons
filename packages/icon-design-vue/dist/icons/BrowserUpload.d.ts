import type { DefineComponent } from 'vue';

export interface BrowserUploadProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BrowserUpload: DefineComponent<BrowserUploadProps>;

export default BrowserUpload;
export { BrowserUpload };
