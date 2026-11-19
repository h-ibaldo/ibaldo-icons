import type { DefineComponent } from 'vue';

export interface DownloadSquareOpenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DownloadSquareOpen: DefineComponent<DownloadSquareOpenProps>;

export default DownloadSquareOpen;
export { DownloadSquareOpen };
