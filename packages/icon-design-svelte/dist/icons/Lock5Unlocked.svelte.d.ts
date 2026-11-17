import { SvelteComponent } from 'svelte';

export interface Lock5UnlockedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Lock5Unlocked extends SvelteComponent<Lock5UnlockedProps> {}
