import { SvelteComponent } from 'svelte';

export interface CloudLockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudLock extends SvelteComponent<CloudLockProps> {}
