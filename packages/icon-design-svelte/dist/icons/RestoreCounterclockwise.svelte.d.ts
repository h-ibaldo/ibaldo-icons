import { SvelteComponent } from 'svelte';

export interface RestoreCounterclockwiseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class RestoreCounterclockwise extends SvelteComponent<RestoreCounterclockwiseProps> {}
