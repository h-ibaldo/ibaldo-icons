import { SvelteComponent } from 'svelte';

export interface LockUnlockedOpenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockUnlockedOpen extends SvelteComponent<LockUnlockedOpenProps> {}
