import { SvelteComponent } from 'svelte';

export interface DockBarProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DockBar extends SvelteComponent<DockBarProps> {}
