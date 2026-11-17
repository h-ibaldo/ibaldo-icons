import { SvelteComponent } from 'svelte';

export interface CloudPlusCornerTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudPlusCornerTall extends SvelteComponent<CloudPlusCornerTallProps> {}
