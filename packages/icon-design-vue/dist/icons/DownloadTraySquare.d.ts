import type { DefineComponent } from 'vue';

export interface DownloadTraySquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DownloadTraySquare: DefineComponent<DownloadTraySquareProps>;

export default DownloadTraySquare;
export { DownloadTraySquare };
