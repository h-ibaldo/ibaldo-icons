import { SvelteComponent } from 'svelte';

export interface LockKeyholeDotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockKeyholeDot extends SvelteComponent<LockKeyholeDotProps> {}
