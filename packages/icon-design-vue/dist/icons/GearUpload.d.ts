import type { DefineComponent } from 'vue';

export interface GearUploadProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GearUpload: DefineComponent<GearUploadProps>;

export default GearUpload;
export { GearUpload };
