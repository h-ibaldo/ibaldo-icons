import { SvelteComponent } from 'svelte';

export interface DockCornerOffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DockCornerOff extends SvelteComponent<DockCornerOffProps> {}
