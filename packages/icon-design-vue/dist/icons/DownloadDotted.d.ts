import type { DefineComponent } from 'vue';

export interface DownloadDottedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DownloadDotted: DefineComponent<DownloadDottedProps>;

export default DownloadDotted;
export { DownloadDotted };
