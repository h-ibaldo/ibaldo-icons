import { SvelteComponent } from 'svelte';

export interface WindowDockingRightDockingProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowDockingRightDocking extends SvelteComponent<WindowDockingRightDockingProps> {}
