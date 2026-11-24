import { SvelteComponent } from 'svelte';

export interface WindowTwoDotsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowTwoDots extends SvelteComponent<WindowTwoDotsProps> {}
