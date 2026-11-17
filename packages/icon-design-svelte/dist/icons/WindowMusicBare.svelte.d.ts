import { SvelteComponent } from 'svelte';

export interface WindowMusicBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowMusicBare extends SvelteComponent<WindowMusicBareProps> {}
