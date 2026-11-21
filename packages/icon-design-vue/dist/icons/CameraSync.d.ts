import type { DefineComponent } from 'vue';

export interface CameraSyncProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CameraSync: DefineComponent<CameraSyncProps>;

export default CameraSync;
export { CameraSync };
