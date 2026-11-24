import { SvelteComponent } from 'svelte';

export interface ToggleOffInsetProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ToggleOffInset extends SvelteComponent<ToggleOffInsetProps> {}
