import { SvelteComponent } from 'svelte';

export interface CloudCheckTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudCheckTall extends SvelteComponent<CloudCheckTallProps> {}
