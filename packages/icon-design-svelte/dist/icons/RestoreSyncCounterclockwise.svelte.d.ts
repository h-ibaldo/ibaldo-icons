import { SvelteComponent } from 'svelte';

export interface RestoreSyncCounterclockwiseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class RestoreSyncCounterclockwise extends SvelteComponent<RestoreSyncCounterclockwiseProps> {}
