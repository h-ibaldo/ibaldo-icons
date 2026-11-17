import { SvelteComponent } from 'svelte';

export interface LayerStackProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LayerStack extends SvelteComponent<LayerStackProps> {}
