import { SvelteComponent } from 'svelte';

export interface RestoreSyncClockwiseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class RestoreSyncClockwise extends SvelteComponent<RestoreSyncClockwiseProps> {}
