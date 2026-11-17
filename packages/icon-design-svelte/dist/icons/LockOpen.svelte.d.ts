import { SvelteComponent } from 'svelte';

export interface LockOpenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockOpen extends SvelteComponent<LockOpenProps> {}
