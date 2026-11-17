import { SvelteComponent } from 'svelte';

export interface LockCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockCheck extends SvelteComponent<LockCheckProps> {}
