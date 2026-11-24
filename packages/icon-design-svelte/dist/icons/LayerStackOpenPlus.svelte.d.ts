import { SvelteComponent } from 'svelte';

export interface LayerStackOpenPlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LayerStackOpenPlus extends SvelteComponent<LayerStackOpenPlusProps> {}
