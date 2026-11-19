import type { DefineComponent } from 'vue';

export interface GearTrayDownloadProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GearTrayDownload: DefineComponent<GearTrayDownloadProps>;

export default GearTrayDownload;
export { GearTrayDownload };
