import { SvelteComponent } from 'svelte';

export interface CloudSearchRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudSearchRight extends SvelteComponent<CloudSearchRightProps> {}
