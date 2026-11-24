import type { DefineComponent } from 'vue';

export interface UploadCircleFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UploadCircleFlat: DefineComponent<UploadCircleFlatProps>;

export default UploadCircleFlat;
export { UploadCircleFlat };
