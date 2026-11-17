import { SvelteComponent } from 'svelte';

export interface CloudUnlockTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudUnlockTall extends SvelteComponent<CloudUnlockTallProps> {}
