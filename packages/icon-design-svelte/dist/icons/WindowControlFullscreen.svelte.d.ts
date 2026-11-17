import { SvelteComponent } from 'svelte';

export interface WindowControlFullscreenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowControlFullscreen extends SvelteComponent<WindowControlFullscreenProps> {}
