import type { DefineComponent } from 'vue';

export interface DownloadSquareOpenPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DownloadSquareOpenPlain: DefineComponent<DownloadSquareOpenPlainProps>;

export default DownloadSquareOpenPlain;
export { DownloadSquareOpenPlain };
