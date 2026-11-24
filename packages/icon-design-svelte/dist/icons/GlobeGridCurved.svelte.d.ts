import { SvelteComponent } from 'svelte';

export interface GlobeGridCurvedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GlobeGridCurved extends SvelteComponent<GlobeGridCurvedProps> {}
