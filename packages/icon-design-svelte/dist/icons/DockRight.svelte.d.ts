import { SvelteComponent } from 'svelte';

export interface DockRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DockRight extends SvelteComponent<DockRightProps> {}
