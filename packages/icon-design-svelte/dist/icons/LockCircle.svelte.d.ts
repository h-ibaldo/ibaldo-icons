import { SvelteComponent } from 'svelte';

export interface LockCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockCircle extends SvelteComponent<LockCircleProps> {}
