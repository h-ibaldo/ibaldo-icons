import { SvelteComponent } from 'svelte';

export interface XLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class XLarge extends SvelteComponent<XLargeProps> {}
