import { SvelteComponent } from 'svelte';

export interface BellCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellCheck extends SvelteComponent<BellCheckProps> {}
