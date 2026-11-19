import type { DefineComponent } from 'vue';

export interface DownloadBoxNotchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DownloadBoxNotch: DefineComponent<DownloadBoxNotchProps>;

export default DownloadBoxNotch;
export { DownloadBoxNotch };
