import { SvelteComponent } from 'svelte';

export interface GlobeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Globe extends SvelteComponent<GlobeProps> {}
