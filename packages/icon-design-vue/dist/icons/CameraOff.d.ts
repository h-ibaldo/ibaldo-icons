import type { DefineComponent } from 'vue';

export interface CameraOffProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CameraOff: DefineComponent<CameraOffProps>;

export default CameraOff;
export { CameraOff };
