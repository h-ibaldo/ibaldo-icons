import { SvelteComponent } from 'svelte';

export interface GlobeGridCursorProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GlobeGridCursor extends SvelteComponent<GlobeGridCursorProps> {}
