import { SvelteComponent } from 'svelte';

export interface CloudArrowDownProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudArrowDown extends SvelteComponent<CloudArrowDownProps> {}
