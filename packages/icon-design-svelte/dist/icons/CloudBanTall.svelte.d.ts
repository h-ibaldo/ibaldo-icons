import { SvelteComponent } from 'svelte';

export interface CloudBanTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudBanTall extends SvelteComponent<CloudBanTallProps> {}
