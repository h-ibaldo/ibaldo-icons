import type { DefineComponent } from 'vue';

export interface CameraProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Camera: DefineComponent<CameraProps>;

export default Camera;
export { Camera };
