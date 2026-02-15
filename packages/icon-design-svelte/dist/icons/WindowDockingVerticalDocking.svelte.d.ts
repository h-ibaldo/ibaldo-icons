import { SvelteComponent } from 'svelte';

export interface WindowDockingVerticalDockingProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowDockingVerticalDocking extends SvelteComponent<WindowDockingVerticalDockingProps> {}
