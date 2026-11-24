import { SvelteComponent } from 'svelte';

export interface LayoutTilesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LayoutTiles extends SvelteComponent<LayoutTilesProps> {}
