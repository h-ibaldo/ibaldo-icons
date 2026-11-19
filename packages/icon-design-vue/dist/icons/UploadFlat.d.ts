import type { DefineComponent } from 'vue';

export interface UploadFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UploadFlat: DefineComponent<UploadFlatProps>;

export default UploadFlat;
export { UploadFlat };
