import { SvelteComponent } from 'svelte';

export interface ArrowUpFromBarProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowUpFromBar extends SvelteComponent<ArrowUpFromBarProps> {}
