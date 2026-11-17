import { SvelteComponent } from 'svelte';

export interface LockUnlockedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockUnlocked extends SvelteComponent<LockUnlockedProps> {}
