import { SvelteComponent } from 'svelte';

export interface WindowStackArrowUpRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowStackArrowUpRight extends SvelteComponent<WindowStackArrowUpRightProps> {}
