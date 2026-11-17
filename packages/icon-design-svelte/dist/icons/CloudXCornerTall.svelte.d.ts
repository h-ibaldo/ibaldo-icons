import { SvelteComponent } from 'svelte';

export interface CloudXCornerTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudXCornerTall extends SvelteComponent<CloudXCornerTallProps> {}
