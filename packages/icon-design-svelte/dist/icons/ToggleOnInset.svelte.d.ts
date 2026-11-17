import { SvelteComponent } from 'svelte';

export interface ToggleOnInsetProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ToggleOnInset extends SvelteComponent<ToggleOnInsetProps> {}
