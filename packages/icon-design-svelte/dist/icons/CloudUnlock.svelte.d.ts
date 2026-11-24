import { SvelteComponent } from 'svelte';

export interface CloudUnlockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudUnlock extends SvelteComponent<CloudUnlockProps> {}
