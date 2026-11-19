import type { DefineComponent } from 'vue';

export interface DownloadSquareDashedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DownloadSquareDashed: DefineComponent<DownloadSquareDashedProps>;

export default DownloadSquareDashed;
export { DownloadSquareDashed };
