import { SvelteComponent } from 'svelte';

export interface XOctagonLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class XOctagonLarge extends SvelteComponent<XOctagonLargeProps> {}
