import { SvelteComponent } from 'svelte';

export interface JustifyBottomProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class JustifyBottom extends SvelteComponent<JustifyBottomProps> {}
