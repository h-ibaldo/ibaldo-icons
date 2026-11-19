import { SvelteComponent } from 'svelte';

export interface GlobeGridCurvedTiltedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GlobeGridCurvedTilted extends SvelteComponent<GlobeGridCurvedTiltedProps> {}
