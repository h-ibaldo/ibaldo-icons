import { SvelteComponent } from 'svelte';

export interface BrowserGlobeMapProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserGlobeMap extends SvelteComponent<BrowserGlobeMapProps> {}
