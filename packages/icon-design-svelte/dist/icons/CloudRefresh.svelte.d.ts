import { SvelteComponent } from 'svelte';

export interface CloudRefreshProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudRefresh extends SvelteComponent<CloudRefreshProps> {}
