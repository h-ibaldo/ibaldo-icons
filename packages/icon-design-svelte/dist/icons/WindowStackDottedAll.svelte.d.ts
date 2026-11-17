import { SvelteComponent } from 'svelte';

export interface WindowStackDottedAllProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowStackDottedAll extends SvelteComponent<WindowStackDottedAllProps> {}
