import type { DefineComponent } from 'vue';

export interface UploadCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UploadCircle: DefineComponent<UploadCircleProps>;

export default UploadCircle;
export { UploadCircle };
