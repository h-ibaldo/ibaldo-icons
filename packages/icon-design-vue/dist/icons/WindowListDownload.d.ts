import type { DefineComponent } from 'vue';

export interface WindowListDownloadProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowListDownload: DefineComponent<WindowListDownloadProps>;

export default WindowListDownload;
export { WindowListDownload };
