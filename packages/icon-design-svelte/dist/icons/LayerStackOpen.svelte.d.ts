import { SvelteComponent } from 'svelte';

export interface LayerStackOpenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LayerStackOpen extends SvelteComponent<LayerStackOpenProps> {}
