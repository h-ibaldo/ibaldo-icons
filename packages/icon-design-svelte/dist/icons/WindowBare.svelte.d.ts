import { SvelteComponent } from 'svelte';

export interface WindowBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowBare extends SvelteComponent<WindowBareProps> {}
