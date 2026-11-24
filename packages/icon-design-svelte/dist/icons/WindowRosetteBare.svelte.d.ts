import { SvelteComponent } from 'svelte';

export interface WindowRosetteBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowRosetteBare extends SvelteComponent<WindowRosetteBareProps> {}
