import type { DefineComponent } from 'vue';

export interface ScreenDownloadProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScreenDownload: DefineComponent<ScreenDownloadProps>;

export default ScreenDownload;
export { ScreenDownload };
