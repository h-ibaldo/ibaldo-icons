import { SvelteComponent } from 'svelte';

export interface WebpageWwwProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WebpageWww extends SvelteComponent<WebpageWwwProps> {}
