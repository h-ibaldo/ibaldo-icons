import { SvelteComponent } from 'svelte';

export interface WindowPlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowPlus extends SvelteComponent<WindowPlusProps> {}
