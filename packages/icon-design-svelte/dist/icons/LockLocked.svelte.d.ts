import { SvelteComponent } from 'svelte';

export interface LockLockedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockLocked extends SvelteComponent<LockLockedProps> {}
