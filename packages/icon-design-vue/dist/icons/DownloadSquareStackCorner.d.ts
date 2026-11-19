import type { DefineComponent } from 'vue';

export interface DownloadSquareStackCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DownloadSquareStackCorner: DefineComponent<DownloadSquareStackCornerProps>;

export default DownloadSquareStackCorner;
export { DownloadSquareStackCorner };
