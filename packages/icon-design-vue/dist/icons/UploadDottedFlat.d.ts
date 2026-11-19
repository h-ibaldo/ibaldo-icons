import type { DefineComponent } from 'vue';

export interface UploadDottedFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UploadDottedFlat: DefineComponent<UploadDottedFlatProps>;

export default UploadDottedFlat;
export { UploadDottedFlat };
