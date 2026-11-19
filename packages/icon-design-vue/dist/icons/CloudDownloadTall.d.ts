import type { DefineComponent } from 'vue';

export interface CloudDownloadTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudDownloadTall: DefineComponent<CloudDownloadTallProps>;

export default CloudDownloadTall;
export { CloudDownloadTall };
