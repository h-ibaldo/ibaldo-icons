import { SvelteComponent } from 'svelte';

export interface LayerStackRoundedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LayerStackRounded extends SvelteComponent<LayerStackRoundedProps> {}
