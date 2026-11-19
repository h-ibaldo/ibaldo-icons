import type { DefineComponent } from 'vue';

export interface BrowserDownloadProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BrowserDownload: DefineComponent<BrowserDownloadProps>;

export default BrowserDownload;
export { BrowserDownload };
