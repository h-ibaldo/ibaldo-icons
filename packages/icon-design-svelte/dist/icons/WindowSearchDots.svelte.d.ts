import { SvelteComponent } from 'svelte';

export interface WindowSearchDotsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowSearchDots extends SvelteComponent<WindowSearchDotsProps> {}
