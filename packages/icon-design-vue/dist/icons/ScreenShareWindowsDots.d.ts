import type { DefineComponent } from 'vue';

export interface ScreenShareWindowsDotsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScreenShareWindowsDots: DefineComponent<ScreenShareWindowsDotsProps>;

export default ScreenShareWindowsDots;
export { ScreenShareWindowsDots };
