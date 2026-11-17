import { SvelteComponent } from 'svelte';

export interface CloudSyncCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudSyncCorner extends SvelteComponent<CloudSyncCornerProps> {}
