import type { DefineComponent } from 'vue';

export interface DownloadTrayProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DownloadTray: DefineComponent<DownloadTrayProps>;

export default DownloadTray;
export { DownloadTray };
