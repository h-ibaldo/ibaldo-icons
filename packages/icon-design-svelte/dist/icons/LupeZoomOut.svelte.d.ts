import { SvelteComponent } from 'svelte';

export interface LupeZoomOutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LupeZoomOut extends SvelteComponent<LupeZoomOutProps> {}
