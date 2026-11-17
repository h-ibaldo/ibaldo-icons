import { SvelteComponent } from 'svelte';

export interface ArrowSyncCircleHookProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowSyncCircleHook extends SvelteComponent<ArrowSyncCircleHookProps> {}
