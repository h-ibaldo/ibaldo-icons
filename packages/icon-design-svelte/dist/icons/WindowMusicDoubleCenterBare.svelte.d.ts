import { SvelteComponent } from 'svelte';

export interface WindowMusicDoubleCenterBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowMusicDoubleCenterBare extends SvelteComponent<WindowMusicDoubleCenterBareProps> {}
