import { SvelteComponent } from 'svelte';

export interface LayoutGridMixedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LayoutGridMixed extends SvelteComponent<LayoutGridMixedProps> {}
