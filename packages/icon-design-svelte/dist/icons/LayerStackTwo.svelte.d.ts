import { SvelteComponent } from 'svelte';

export interface LayerStackTwoProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LayerStackTwo extends SvelteComponent<LayerStackTwoProps> {}
