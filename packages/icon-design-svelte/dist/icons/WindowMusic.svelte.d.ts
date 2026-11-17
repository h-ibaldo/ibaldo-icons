import { SvelteComponent } from 'svelte';

export interface WindowMusicProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowMusic extends SvelteComponent<WindowMusicProps> {}
