import type { DefineComponent } from 'vue';

export interface UploadBoxNotchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UploadBoxNotch: DefineComponent<UploadBoxNotchProps>;

export default UploadBoxNotch;
export { UploadBoxNotch };
