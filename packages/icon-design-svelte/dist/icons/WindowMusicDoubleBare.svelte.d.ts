import { SvelteComponent } from 'svelte';

export interface WindowMusicDoubleBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowMusicDoubleBare extends SvelteComponent<WindowMusicDoubleBareProps> {}
