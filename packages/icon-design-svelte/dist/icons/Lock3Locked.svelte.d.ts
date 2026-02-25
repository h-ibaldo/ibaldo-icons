import { SvelteComponent } from 'svelte';

export interface Lock3LockedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Lock3Locked extends SvelteComponent<Lock3LockedProps> {}
