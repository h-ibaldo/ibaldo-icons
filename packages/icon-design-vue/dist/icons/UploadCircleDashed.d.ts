import type { DefineComponent } from 'vue';

export interface UploadCircleDashedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UploadCircleDashed: DefineComponent<UploadCircleDashedProps>;

export default UploadCircleDashed;
export { UploadCircleDashed };
