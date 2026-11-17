import { SvelteComponent } from 'svelte';

export interface LockLocked2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockLocked2 extends SvelteComponent<LockLocked2Props> {}
