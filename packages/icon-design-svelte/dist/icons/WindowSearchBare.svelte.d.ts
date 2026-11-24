import { SvelteComponent } from 'svelte';

export interface WindowSearchBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowSearchBare extends SvelteComponent<WindowSearchBareProps> {}
