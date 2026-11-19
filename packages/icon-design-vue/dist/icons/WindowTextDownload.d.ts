import type { DefineComponent } from 'vue';

export interface WindowTextDownloadProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowTextDownload: DefineComponent<WindowTextDownloadProps>;

export default WindowTextDownload;
export { WindowTextDownload };
