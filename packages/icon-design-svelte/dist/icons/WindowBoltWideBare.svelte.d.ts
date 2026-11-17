import { SvelteComponent } from 'svelte';

export interface WindowBoltWideBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowBoltWideBare extends SvelteComponent<WindowBoltWideBareProps> {}
