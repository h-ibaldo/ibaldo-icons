import { SvelteComponent } from 'svelte';

export interface ToggleOnSlimProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ToggleOnSlim extends SvelteComponent<ToggleOnSlimProps> {}
