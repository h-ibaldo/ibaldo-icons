import { SvelteComponent } from 'svelte';

export interface ClockLockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockLock extends SvelteComponent<ClockLockProps> {}
