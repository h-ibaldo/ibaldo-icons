import { SvelteComponent } from 'svelte';

export interface WebpageWwwFileProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WebpageWwwFile extends SvelteComponent<WebpageWwwFileProps> {}
