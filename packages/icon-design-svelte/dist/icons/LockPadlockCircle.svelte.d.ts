import { SvelteComponent } from 'svelte';

export interface LockPadlockCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockPadlockCircle extends SvelteComponent<LockPadlockCircleProps> {}
