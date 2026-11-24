import { SvelteComponent } from 'svelte';

export interface WindowMusicCenterBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowMusicCenterBare extends SvelteComponent<WindowMusicCenterBareProps> {}
