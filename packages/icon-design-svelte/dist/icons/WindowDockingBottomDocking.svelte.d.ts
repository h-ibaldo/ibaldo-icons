import { SvelteComponent } from 'svelte';

export interface WindowDockingBottomDockingProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowDockingBottomDocking extends SvelteComponent<WindowDockingBottomDockingProps> {}
