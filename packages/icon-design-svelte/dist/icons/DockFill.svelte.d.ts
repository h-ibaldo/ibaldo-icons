import { SvelteComponent } from 'svelte';

export interface DockFillProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DockFill extends SvelteComponent<DockFillProps> {}
