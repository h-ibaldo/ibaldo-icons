import { SvelteComponent } from 'svelte';

export interface WindowBoltBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowBoltBare extends SvelteComponent<WindowBoltBareProps> {}
