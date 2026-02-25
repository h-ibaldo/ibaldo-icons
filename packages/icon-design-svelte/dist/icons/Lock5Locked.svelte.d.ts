import { SvelteComponent } from 'svelte';

export interface Lock5LockedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Lock5Locked extends SvelteComponent<Lock5LockedProps> {}
