import type { DefineComponent } from 'vue';

export interface CameraBoxProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CameraBox: DefineComponent<CameraBoxProps>;

export default CameraBox;
export { CameraBox };
