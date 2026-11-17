import { SvelteComponent } from 'svelte';

export interface ToggleOnSquaredProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ToggleOnSquared extends SvelteComponent<ToggleOnSquaredProps> {}
