import { SvelteComponent } from 'svelte';

export interface RectangleArrowAdAdvertisingProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class RectangleArrowAdAdvertising extends SvelteComponent<RectangleArrowAdAdvertisingProps> {}
