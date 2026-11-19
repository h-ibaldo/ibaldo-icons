import type { DefineComponent } from 'vue';

export interface ScreenshotCameraPlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScreenshotCameraPlus: DefineComponent<ScreenshotCameraPlusProps>;

export default ScreenshotCameraPlus;
export { ScreenshotCameraPlus };
