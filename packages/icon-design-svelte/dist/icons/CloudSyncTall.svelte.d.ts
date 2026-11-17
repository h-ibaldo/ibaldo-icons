import { SvelteComponent } from 'svelte';

export interface CloudSyncTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudSyncTall extends SvelteComponent<CloudSyncTallProps> {}
