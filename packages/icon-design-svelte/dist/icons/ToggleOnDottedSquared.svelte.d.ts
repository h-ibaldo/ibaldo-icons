import { SvelteComponent } from 'svelte';

export interface ToggleOnDottedSquaredProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ToggleOnDottedSquared extends SvelteComponent<ToggleOnDottedSquaredProps> {}
