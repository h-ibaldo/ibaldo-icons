import { SvelteComponent } from 'svelte';

export interface LockClose2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockClose2 extends SvelteComponent<LockClose2Props> {}
