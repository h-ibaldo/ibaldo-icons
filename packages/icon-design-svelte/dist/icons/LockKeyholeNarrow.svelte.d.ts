import { SvelteComponent } from 'svelte';

export interface LockKeyholeNarrowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockKeyholeNarrow extends SvelteComponent<LockKeyholeNarrowProps> {}
