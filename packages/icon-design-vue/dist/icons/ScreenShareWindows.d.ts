import type { DefineComponent } from 'vue';

export interface ScreenShareWindowsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScreenShareWindows: DefineComponent<ScreenShareWindowsProps>;

export default ScreenShareWindows;
export { ScreenShareWindows };
