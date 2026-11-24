import type { DefineComponent } from 'vue';

export interface WindowMusicDoubleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowMusicDouble: DefineComponent<WindowMusicDoubleProps>;

export default WindowMusicDouble;
export { WindowMusicDouble };
