import { SvelteComponent } from 'svelte';

export interface SwatchFanProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SwatchFan extends SvelteComponent<SwatchFanProps> {}
