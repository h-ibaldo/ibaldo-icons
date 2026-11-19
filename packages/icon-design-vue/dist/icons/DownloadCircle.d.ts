import type { DefineComponent } from 'vue';

export interface DownloadCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DownloadCircle: DefineComponent<DownloadCircleProps>;

export default DownloadCircle;
export { DownloadCircle };
