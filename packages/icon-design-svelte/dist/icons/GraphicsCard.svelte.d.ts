import { SvelteComponent } from 'svelte';

export interface GraphicsCardProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GraphicsCard extends SvelteComponent<GraphicsCardProps> {}
