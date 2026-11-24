import type { DefineComponent } from 'vue';

export interface ScreenshotCameraProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScreenshotCamera: DefineComponent<ScreenshotCameraProps>;

export default ScreenshotCamera;
export { ScreenshotCamera };
