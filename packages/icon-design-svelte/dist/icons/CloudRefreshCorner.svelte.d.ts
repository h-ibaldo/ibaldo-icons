import { SvelteComponent } from 'svelte';

export interface CloudRefreshCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudRefreshCorner extends SvelteComponent<CloudRefreshCornerProps> {}
