import type { DefineComponent } from 'vue';

export interface DownloadDottedFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DownloadDottedFlat: DefineComponent<DownloadDottedFlatProps>;

export default DownloadDottedFlat;
export { DownloadDottedFlat };
