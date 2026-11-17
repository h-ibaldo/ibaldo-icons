import { SvelteComponent } from 'svelte';

export interface FullscreenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Fullscreen extends SvelteComponent<FullscreenProps> {}
