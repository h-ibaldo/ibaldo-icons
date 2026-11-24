import { SvelteComponent } from 'svelte';

export interface CloudArrowUpDownTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudArrowUpDownTall extends SvelteComponent<CloudArrowUpDownTallProps> {}
