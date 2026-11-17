import { SvelteComponent } from 'svelte';

export interface LupeZoom3ActualProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LupeZoom3Actual extends SvelteComponent<LupeZoom3ActualProps> {}
