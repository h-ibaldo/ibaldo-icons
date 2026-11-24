import { SvelteComponent } from 'svelte';

export interface DockTopProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DockTop extends SvelteComponent<DockTopProps> {}
