import { SvelteComponent } from 'svelte';

export interface Lock2LockedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Lock2Locked extends SvelteComponent<Lock2LockedProps> {}
