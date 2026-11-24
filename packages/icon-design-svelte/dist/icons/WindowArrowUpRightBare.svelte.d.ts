import { SvelteComponent } from 'svelte';

export interface WindowArrowUpRightBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowArrowUpRightBare extends SvelteComponent<WindowArrowUpRightBareProps> {}
