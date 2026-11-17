import { SvelteComponent } from 'svelte';

export interface WindowDockingVerticalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowDockingVertical extends SvelteComponent<WindowDockingVerticalProps> {}
