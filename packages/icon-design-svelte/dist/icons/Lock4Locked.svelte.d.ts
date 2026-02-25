import { SvelteComponent } from 'svelte';

export interface Lock4LockedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Lock4Locked extends SvelteComponent<Lock4LockedProps> {}
