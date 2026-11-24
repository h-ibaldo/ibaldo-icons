import type { DefineComponent } from 'vue';

export interface WindowMusicBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowMusicBare: DefineComponent<WindowMusicBareProps>;

export default WindowMusicBare;
export { WindowMusicBare };
