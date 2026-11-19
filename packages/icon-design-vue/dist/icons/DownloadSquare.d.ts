import type { DefineComponent } from 'vue';

export interface DownloadSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DownloadSquare: DefineComponent<DownloadSquareProps>;

export default DownloadSquare;
export { DownloadSquare };
