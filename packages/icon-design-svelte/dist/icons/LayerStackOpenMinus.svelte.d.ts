import { SvelteComponent } from 'svelte';

export interface LayerStackOpenMinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LayerStackOpenMinus extends SvelteComponent<LayerStackOpenMinusProps> {}
