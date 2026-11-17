import { SvelteComponent } from 'svelte';

export interface WindowDockingFillProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowDockingFill extends SvelteComponent<WindowDockingFillProps> {}
