import { SvelteComponent } from 'svelte';

export interface CloudArrowSyncProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudArrowSync extends SvelteComponent<CloudArrowSyncProps> {}
