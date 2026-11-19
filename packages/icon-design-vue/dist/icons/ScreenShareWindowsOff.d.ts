import type { DefineComponent } from 'vue';

export interface ScreenShareWindowsOffProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScreenShareWindowsOff: DefineComponent<ScreenShareWindowsOffProps>;

export default ScreenShareWindowsOff;
export { ScreenShareWindowsOff };
