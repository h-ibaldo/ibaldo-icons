import { SvelteComponent } from 'svelte';

export interface WindowMusicDoubleCenterProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowMusicDoubleCenter extends SvelteComponent<WindowMusicDoubleCenterProps> {}
