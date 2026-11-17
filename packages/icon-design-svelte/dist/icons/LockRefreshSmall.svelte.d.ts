import { SvelteComponent } from 'svelte';

export interface LockRefreshSmallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockRefreshSmall extends SvelteComponent<LockRefreshSmallProps> {}
