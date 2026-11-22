import { SvelteComponent } from 'svelte';

export interface ArrowCornersInProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowCornersIn extends SvelteComponent<ArrowCornersInProps> {}
