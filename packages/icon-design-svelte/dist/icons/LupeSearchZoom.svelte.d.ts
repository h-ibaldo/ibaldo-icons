import { SvelteComponent } from 'svelte';

export interface LupeSearchZoomProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LupeSearchZoom extends SvelteComponent<LupeSearchZoomProps> {}
