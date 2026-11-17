import { SvelteComponent } from 'svelte';

export interface WindowMenuProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowMenu extends SvelteComponent<WindowMenuProps> {}
