import type { DefineComponent } from 'vue';

export interface DownloadFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DownloadFlat: DefineComponent<DownloadFlatProps>;

export default DownloadFlat;
export { DownloadFlat };
