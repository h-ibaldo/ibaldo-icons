import type { DefineComponent } from 'vue';

export interface DownloadCircleFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DownloadCircleFlat: DefineComponent<DownloadCircleFlatProps>;

export default DownloadCircleFlat;
export { DownloadCircleFlat };
