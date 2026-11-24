import type { DefineComponent } from 'vue';

export interface WindowMusicProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowMusic: DefineComponent<WindowMusicProps>;

export default WindowMusic;
export { WindowMusic };
