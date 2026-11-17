import { SvelteComponent } from 'svelte';

export interface ToggleOnStripedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ToggleOnStriped extends SvelteComponent<ToggleOnStripedProps> {}
