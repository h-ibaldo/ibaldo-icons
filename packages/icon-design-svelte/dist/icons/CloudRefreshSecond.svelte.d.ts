import { SvelteComponent } from 'svelte';

export interface CloudRefreshSecondProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudRefreshSecond extends SvelteComponent<CloudRefreshSecondProps> {}
