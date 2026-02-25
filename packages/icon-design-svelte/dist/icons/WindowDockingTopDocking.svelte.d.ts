import { SvelteComponent } from 'svelte';

export interface WindowDockingTopDockingProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowDockingTopDocking extends SvelteComponent<WindowDockingTopDockingProps> {}
