import { SvelteComponent } from 'svelte';

export interface LockEyeNarrowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockEyeNarrow extends SvelteComponent<LockEyeNarrowProps> {}
