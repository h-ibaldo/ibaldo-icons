import { SvelteComponent } from 'svelte';

export interface ToggleOffSlimProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ToggleOffSlim extends SvelteComponent<ToggleOffSlimProps> {}
