import type { DefineComponent } from 'vue';

export interface DownloadProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Download: DefineComponent<DownloadProps>;

export default Download;
export { Download };
