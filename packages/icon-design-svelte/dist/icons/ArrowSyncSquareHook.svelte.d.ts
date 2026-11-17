import { SvelteComponent } from 'svelte';

export interface ArrowSyncSquareHookProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowSyncSquareHook extends SvelteComponent<ArrowSyncSquareHookProps> {}
