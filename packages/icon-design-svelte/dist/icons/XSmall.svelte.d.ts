import { SvelteComponent } from 'svelte';

export interface XSmallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class XSmall extends SvelteComponent<XSmallProps> {}
