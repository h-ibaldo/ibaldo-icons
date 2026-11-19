import type { DefineComponent } from 'vue';

export interface GearDownloadProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GearDownload: DefineComponent<GearDownloadProps>;

export default GearDownload;
export { GearDownload };
