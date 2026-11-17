import { SvelteComponent } from 'svelte';

export interface BorderBottomProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BorderBottom extends SvelteComponent<BorderBottomProps> {}
