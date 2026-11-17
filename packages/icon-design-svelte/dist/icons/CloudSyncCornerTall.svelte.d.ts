import { SvelteComponent } from 'svelte';

export interface CloudSyncCornerTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudSyncCornerTall extends SvelteComponent<CloudSyncCornerTallProps> {}
