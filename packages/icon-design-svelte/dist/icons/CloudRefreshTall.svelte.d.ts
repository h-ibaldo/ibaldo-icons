import { SvelteComponent } from 'svelte';

export interface CloudRefreshTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudRefreshTall extends SvelteComponent<CloudRefreshTallProps> {}
