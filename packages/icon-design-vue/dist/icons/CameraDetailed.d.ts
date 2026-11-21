import type { DefineComponent } from 'vue';

export interface CameraDetailedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CameraDetailed: DefineComponent<CameraDetailedProps>;

export default CameraDetailed;
export { CameraDetailed };
