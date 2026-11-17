import { SvelteComponent } from 'svelte';

export interface WindowDockingLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowDockingLeft extends SvelteComponent<WindowDockingLeftProps> {}
