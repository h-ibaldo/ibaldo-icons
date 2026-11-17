import { SvelteComponent } from 'svelte';

export interface LockDotsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockDots extends SvelteComponent<LockDotsProps> {}
