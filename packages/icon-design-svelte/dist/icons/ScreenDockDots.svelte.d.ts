import { SvelteComponent } from 'svelte';

export interface ScreenDockDotsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScreenDockDots extends SvelteComponent<ScreenDockDotsProps> {}
