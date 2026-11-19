import type { DefineComponent } from 'vue';

export interface CloudDownloadLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudDownloadLarge: DefineComponent<CloudDownloadLargeProps>;

export default CloudDownloadLarge;
export { CloudDownloadLarge };
