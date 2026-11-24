import { SvelteComponent } from 'svelte';

export interface CubeArrowsOutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CubeArrowsOut extends SvelteComponent<CubeArrowsOutProps> {}
