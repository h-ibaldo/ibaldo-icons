import { SvelteComponent } from 'svelte';

export interface GlobeGridDotsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GlobeGridDots extends SvelteComponent<GlobeGridDotsProps> {}
