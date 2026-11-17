import { SvelteComponent } from 'svelte';

export interface WindowDockingTopProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowDockingTop extends SvelteComponent<WindowDockingTopProps> {}
