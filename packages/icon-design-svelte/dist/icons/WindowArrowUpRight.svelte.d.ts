import { SvelteComponent } from 'svelte';

export interface WindowArrowUpRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowArrowUpRight extends SvelteComponent<WindowArrowUpRightProps> {}
