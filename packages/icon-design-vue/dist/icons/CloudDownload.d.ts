import type { DefineComponent } from 'vue';

export interface CloudDownloadProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudDownload: DefineComponent<CloudDownloadProps>;

export default CloudDownload;
export { CloudDownload };
