import type { DefineComponent } from 'vue';

export interface ScreenDownloadDotsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScreenDownloadDots: DefineComponent<ScreenDownloadDotsProps>;

export default ScreenDownloadDots;
export { ScreenDownloadDots };
