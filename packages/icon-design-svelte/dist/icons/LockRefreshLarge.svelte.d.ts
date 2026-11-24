import { SvelteComponent } from 'svelte';

export interface LockRefreshLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockRefreshLarge extends SvelteComponent<LockRefreshLargeProps> {}
