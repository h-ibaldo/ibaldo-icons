import { SvelteComponent } from 'svelte';

export interface LockCheckOpenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockCheckOpen extends SvelteComponent<LockCheckOpenProps> {}
