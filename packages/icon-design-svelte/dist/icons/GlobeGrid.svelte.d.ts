import { SvelteComponent } from 'svelte';

export interface GlobeGridProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GlobeGrid extends SvelteComponent<GlobeGridProps> {}
