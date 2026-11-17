import { SvelteComponent } from 'svelte';

export interface WindowDotsRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowDotsRight extends SvelteComponent<WindowDotsRightProps> {}
