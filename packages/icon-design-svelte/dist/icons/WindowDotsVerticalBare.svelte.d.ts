import { SvelteComponent } from 'svelte';

export interface WindowDotsVerticalBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowDotsVerticalBare extends SvelteComponent<WindowDotsVerticalBareProps> {}
