import { SvelteComponent } from 'svelte';

export interface CloudXTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudXTall extends SvelteComponent<CloudXTallProps> {}
