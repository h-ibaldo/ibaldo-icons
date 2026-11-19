import type { DefineComponent } from 'vue';

export interface UploadDottedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UploadDotted: DefineComponent<UploadDottedProps>;

export default UploadDotted;
export { UploadDotted };
