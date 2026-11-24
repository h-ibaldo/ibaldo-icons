import { SvelteComponent } from 'svelte';

export interface WindowArrowUpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowArrowUp extends SvelteComponent<WindowArrowUpProps> {}
