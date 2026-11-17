import { SvelteComponent } from 'svelte';

export interface RestoreClockwiseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class RestoreClockwise extends SvelteComponent<RestoreClockwiseProps> {}
