import type { DefineComponent } from 'vue';

export interface UploadTriangleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UploadTriangle: DefineComponent<UploadTriangleProps>;

export default UploadTriangle;
export { UploadTriangle };
