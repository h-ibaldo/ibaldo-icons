import { SvelteComponent } from 'svelte';

export interface CloudPlusCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudPlusCorner extends SvelteComponent<CloudPlusCornerProps> {}
