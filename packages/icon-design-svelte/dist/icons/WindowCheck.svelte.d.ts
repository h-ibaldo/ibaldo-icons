import { SvelteComponent } from 'svelte';

export interface WindowCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowCheck extends SvelteComponent<WindowCheckProps> {}
