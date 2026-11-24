import type { DefineComponent } from 'vue';

export interface DownloadCircleDashedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DownloadCircleDashed: DefineComponent<DownloadCircleDashedProps>;

export default DownloadCircleDashed;
export { DownloadCircleDashed };
