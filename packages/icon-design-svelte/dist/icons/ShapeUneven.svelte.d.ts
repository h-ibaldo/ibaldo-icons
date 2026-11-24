import { SvelteComponent } from 'svelte';

export interface ShapeUnevenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ShapeUneven extends SvelteComponent<ShapeUnevenProps> {}
