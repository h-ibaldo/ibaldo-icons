import { SvelteComponent } from 'svelte';

export interface ToggleOffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ToggleOff extends SvelteComponent<ToggleOffProps> {}
