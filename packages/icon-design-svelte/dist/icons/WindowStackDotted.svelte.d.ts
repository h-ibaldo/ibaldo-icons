import { SvelteComponent } from 'svelte';

export interface WindowStackDottedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowStackDotted extends SvelteComponent<WindowStackDottedProps> {}
