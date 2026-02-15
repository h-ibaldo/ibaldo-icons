import { SvelteComponent } from 'svelte';

export interface WindowDockingFillDockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowDockingFillDock extends SvelteComponent<WindowDockingFillDockProps> {}
