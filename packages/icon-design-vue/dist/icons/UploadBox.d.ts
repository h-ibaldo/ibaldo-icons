import type { DefineComponent } from 'vue';

export interface UploadBoxProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UploadBox: DefineComponent<UploadBoxProps>;

export default UploadBox;
export { UploadBox };
