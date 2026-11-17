import { SvelteComponent } from 'svelte';

export interface ScreenDockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScreenDock extends SvelteComponent<ScreenDockProps> {}
