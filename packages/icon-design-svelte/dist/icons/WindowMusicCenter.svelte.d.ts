import { SvelteComponent } from 'svelte';

export interface WindowMusicCenterProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowMusicCenter extends SvelteComponent<WindowMusicCenterProps> {}
