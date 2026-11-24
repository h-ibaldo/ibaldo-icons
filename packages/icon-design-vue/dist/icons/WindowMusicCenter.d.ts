import type { DefineComponent } from 'vue';

export interface WindowMusicCenterProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowMusicCenter: DefineComponent<WindowMusicCenterProps>;

export default WindowMusicCenter;
export { WindowMusicCenter };
