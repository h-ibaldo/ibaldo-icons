import { SvelteComponent } from 'svelte';

export interface ArrowSyncCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowSyncCircle extends SvelteComponent<ArrowSyncCircleProps> {}
