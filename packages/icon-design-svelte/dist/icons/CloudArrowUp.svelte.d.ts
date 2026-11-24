import { SvelteComponent } from 'svelte';

export interface CloudArrowUpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudArrowUp extends SvelteComponent<CloudArrowUpProps> {}
