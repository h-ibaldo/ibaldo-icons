import type { DefineComponent } from 'vue';

export interface DownloadSquareNotchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DownloadSquareNotch: DefineComponent<DownloadSquareNotchProps>;

export default DownloadSquareNotch;
export { DownloadSquareNotch };
