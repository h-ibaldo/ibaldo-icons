import { SvelteComponent } from 'svelte';

export interface WindowMinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowMinus extends SvelteComponent<WindowMinusProps> {}
