import type { DefineComponent } from 'vue';

export interface DownloadSquareStackOpenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DownloadSquareStackOpen: DefineComponent<DownloadSquareStackOpenProps>;

export default DownloadSquareStackOpen;
export { DownloadSquareStackOpen };
