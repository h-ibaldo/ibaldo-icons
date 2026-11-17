import { SvelteComponent } from 'svelte';

export interface WindowArrowUpTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowArrowUpTall extends SvelteComponent<WindowArrowUpTallProps> {}
