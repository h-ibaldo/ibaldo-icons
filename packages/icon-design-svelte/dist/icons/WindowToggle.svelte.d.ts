import { SvelteComponent } from 'svelte';

export interface WindowToggleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowToggle extends SvelteComponent<WindowToggleProps> {}
