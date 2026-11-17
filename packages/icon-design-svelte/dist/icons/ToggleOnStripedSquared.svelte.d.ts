import { SvelteComponent } from 'svelte';

export interface ToggleOnStripedSquaredProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ToggleOnStripedSquared extends SvelteComponent<ToggleOnStripedSquaredProps> {}
