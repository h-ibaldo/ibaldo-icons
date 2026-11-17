import { SvelteComponent } from 'svelte';

export interface CloudArrowDownTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudArrowDownTall extends SvelteComponent<CloudArrowDownTallProps> {}
