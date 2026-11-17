import { SvelteComponent } from 'svelte';

export interface LockDotsDashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockDotsDash extends SvelteComponent<LockDotsDashProps> {}
