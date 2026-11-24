import type { DefineComponent } from 'vue';

export interface DownloadSquareStackProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DownloadSquareStack: DefineComponent<DownloadSquareStackProps>;

export default DownloadSquareStack;
export { DownloadSquareStack };
