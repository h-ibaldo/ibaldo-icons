import { SvelteComponent } from 'svelte';

export interface ArrowCounterclockwiseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowCounterclockwise extends SvelteComponent<ArrowCounterclockwiseProps> {}
