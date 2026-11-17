import { SvelteComponent } from 'svelte';

export interface CloudCheckCornerTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudCheckCornerTall extends SvelteComponent<CloudCheckCornerTallProps> {}
