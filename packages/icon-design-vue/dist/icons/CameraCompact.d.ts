import type { DefineComponent } from 'vue';

export interface CameraCompactProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CameraCompact: DefineComponent<CameraCompactProps>;

export default CameraCompact;
export { CameraCompact };
