import { SvelteComponent } from 'svelte';

export interface LockOpenKeyholeNarrowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockOpenKeyholeNarrow extends SvelteComponent<LockOpenKeyholeNarrowProps> {}
