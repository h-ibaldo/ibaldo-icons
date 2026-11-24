import type { DefineComponent } from 'vue';

export interface ScreenshotPlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScreenshotPlus: DefineComponent<ScreenshotPlusProps>;

export default ScreenshotPlus;
export { ScreenshotPlus };
