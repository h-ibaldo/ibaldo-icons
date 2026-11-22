import { SvelteComponent } from 'svelte';

export interface BoxCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BoxCheck extends SvelteComponent<BoxCheckProps> {}
