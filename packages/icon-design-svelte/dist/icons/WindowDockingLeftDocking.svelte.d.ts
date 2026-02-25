import { SvelteComponent } from 'svelte';

export interface WindowDockingLeftDockingProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowDockingLeftDocking extends SvelteComponent<WindowDockingLeftDockingProps> {}
