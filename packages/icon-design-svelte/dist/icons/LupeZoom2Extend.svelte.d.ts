import { SvelteComponent } from 'svelte';

export interface LupeZoom2ExtendProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LupeZoom2Extend extends SvelteComponent<LupeZoom2ExtendProps> {}
