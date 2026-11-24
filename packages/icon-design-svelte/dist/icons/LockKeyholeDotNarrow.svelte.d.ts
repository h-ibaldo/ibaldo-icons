import { SvelteComponent } from 'svelte';

export interface LockKeyholeDotNarrowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockKeyholeDotNarrow extends SvelteComponent<LockKeyholeDotNarrowProps> {}
