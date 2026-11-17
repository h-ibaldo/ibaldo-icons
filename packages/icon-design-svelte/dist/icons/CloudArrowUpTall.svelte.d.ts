import { SvelteComponent } from 'svelte';

export interface CloudArrowUpTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudArrowUpTall extends SvelteComponent<CloudArrowUpTallProps> {}
