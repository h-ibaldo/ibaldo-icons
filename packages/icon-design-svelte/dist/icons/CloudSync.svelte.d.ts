import { SvelteComponent } from 'svelte';

export interface CloudSyncProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudSync extends SvelteComponent<CloudSyncProps> {}
