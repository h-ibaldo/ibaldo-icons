import { SvelteComponent } from 'svelte';

export interface RectangleArrowAdvertisingProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class RectangleArrowAdvertising extends SvelteComponent<RectangleArrowAdvertisingProps> {}
