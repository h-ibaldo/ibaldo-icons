import { SvelteComponent } from 'svelte';

export interface LupeZoom3ExtendProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LupeZoom3Extend extends SvelteComponent<LupeZoom3ExtendProps> {}
