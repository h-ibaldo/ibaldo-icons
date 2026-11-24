import { SvelteComponent } from 'svelte';

export interface CloudBanProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudBan extends SvelteComponent<CloudBanProps> {}
