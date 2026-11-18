import { SvelteComponent } from 'svelte';

export interface GlobeGridTiltedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GlobeGridTilted extends SvelteComponent<GlobeGridTiltedProps> {}
