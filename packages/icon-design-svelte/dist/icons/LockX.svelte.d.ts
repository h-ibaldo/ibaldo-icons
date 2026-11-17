import { SvelteComponent } from 'svelte';

export interface LockXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockX extends SvelteComponent<LockXProps> {}
