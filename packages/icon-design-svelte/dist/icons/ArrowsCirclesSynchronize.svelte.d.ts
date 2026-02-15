import { SvelteComponent } from 'svelte';

export interface ArrowsCirclesSynchronizeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowsCirclesSynchronize extends SvelteComponent<ArrowsCirclesSynchronizeProps> {}
