import { SvelteComponent } from 'svelte';

export interface LockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Lock extends SvelteComponent<LockProps> {}
