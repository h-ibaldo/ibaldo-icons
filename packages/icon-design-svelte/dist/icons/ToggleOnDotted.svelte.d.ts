import { SvelteComponent } from 'svelte';

export interface ToggleOnDottedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ToggleOnDotted extends SvelteComponent<ToggleOnDottedProps> {}
