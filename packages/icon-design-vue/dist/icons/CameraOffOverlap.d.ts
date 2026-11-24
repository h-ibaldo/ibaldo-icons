import type { DefineComponent } from 'vue';

export interface CameraOffOverlapProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CameraOffOverlap: DefineComponent<CameraOffOverlapProps>;

export default CameraOffOverlap;
export { CameraOffOverlap };
