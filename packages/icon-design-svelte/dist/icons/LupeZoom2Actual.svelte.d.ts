import { SvelteComponent } from 'svelte';

export interface LupeZoom2ActualProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LupeZoom2Actual extends SvelteComponent<LupeZoom2ActualProps> {}
