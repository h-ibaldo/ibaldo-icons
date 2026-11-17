import { SvelteComponent } from 'svelte';

export interface LayoutGridShapesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LayoutGridShapes extends SvelteComponent<LayoutGridShapesProps> {}
