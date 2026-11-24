import { SvelteComponent } from 'svelte';

export interface LayerStackOpenArrowDownProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LayerStackOpenArrowDown extends SvelteComponent<LayerStackOpenArrowDownProps> {}
