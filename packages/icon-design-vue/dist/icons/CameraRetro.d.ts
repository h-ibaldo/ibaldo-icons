import type { DefineComponent } from 'vue';

export interface CameraRetroProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CameraRetro: DefineComponent<CameraRetroProps>;

export default CameraRetro;
export { CameraRetro };
