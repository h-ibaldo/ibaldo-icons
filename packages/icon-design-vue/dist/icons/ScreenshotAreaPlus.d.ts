import type { DefineComponent } from 'vue';

export interface ScreenshotAreaPlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScreenshotAreaPlus: DefineComponent<ScreenshotAreaPlusProps>;

export default ScreenshotAreaPlus;
export { ScreenshotAreaPlus };
