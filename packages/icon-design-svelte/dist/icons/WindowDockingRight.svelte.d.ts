import { SvelteComponent } from 'svelte';

export interface WindowDockingRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowDockingRight extends SvelteComponent<WindowDockingRightProps> {}
