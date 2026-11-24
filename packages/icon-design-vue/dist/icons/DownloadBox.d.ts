import type { DefineComponent } from 'vue';

export interface DownloadBoxProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DownloadBox: DefineComponent<DownloadBoxProps>;

export default DownloadBox;
export { DownloadBox };
