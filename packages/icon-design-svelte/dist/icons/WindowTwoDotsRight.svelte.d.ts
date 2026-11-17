import { SvelteComponent } from 'svelte';

export interface WindowTwoDotsRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowTwoDotsRight extends SvelteComponent<WindowTwoDotsRightProps> {}
