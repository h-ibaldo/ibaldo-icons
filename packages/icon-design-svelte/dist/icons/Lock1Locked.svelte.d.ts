import { SvelteComponent } from 'svelte';

export interface Lock1LockedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Lock1Locked extends SvelteComponent<Lock1LockedProps> {}
