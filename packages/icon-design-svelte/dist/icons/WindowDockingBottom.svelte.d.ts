import { SvelteComponent } from 'svelte';

export interface WindowDockingBottomProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowDockingBottom extends SvelteComponent<WindowDockingBottomProps> {}
