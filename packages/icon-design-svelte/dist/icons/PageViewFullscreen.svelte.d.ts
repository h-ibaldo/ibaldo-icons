import { SvelteComponent } from 'svelte';

export interface PageViewFullscreenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PageViewFullscreen extends SvelteComponent<PageViewFullscreenProps> {}
