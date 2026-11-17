import { SvelteComponent } from 'svelte';

export interface WindowStackStripedAllProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowStackStripedAll extends SvelteComponent<WindowStackStripedAllProps> {}
