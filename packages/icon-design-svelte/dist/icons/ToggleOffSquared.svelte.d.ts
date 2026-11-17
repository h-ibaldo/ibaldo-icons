import { SvelteComponent } from 'svelte';

export interface ToggleOffSquaredProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ToggleOffSquared extends SvelteComponent<ToggleOffSquaredProps> {}
