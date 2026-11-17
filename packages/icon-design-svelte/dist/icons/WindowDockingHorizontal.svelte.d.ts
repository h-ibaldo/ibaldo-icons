import { SvelteComponent } from 'svelte';

export interface WindowDockingHorizontalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowDockingHorizontal extends SvelteComponent<WindowDockingHorizontalProps> {}
