import { SvelteComponent } from 'svelte';

export interface VectorPolygonProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VectorPolygon extends SvelteComponent<VectorPolygonProps> {}
