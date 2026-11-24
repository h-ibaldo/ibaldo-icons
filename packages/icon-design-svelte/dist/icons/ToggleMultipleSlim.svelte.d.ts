import { SvelteComponent } from 'svelte';

export interface ToggleMultipleSlimProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ToggleMultipleSlim extends SvelteComponent<ToggleMultipleSlimProps> {}
