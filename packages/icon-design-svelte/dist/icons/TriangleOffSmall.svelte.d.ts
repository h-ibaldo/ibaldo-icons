import { SvelteComponent } from 'svelte';

export interface TriangleOffSmallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TriangleOffSmall extends SvelteComponent<TriangleOffSmallProps> {}
