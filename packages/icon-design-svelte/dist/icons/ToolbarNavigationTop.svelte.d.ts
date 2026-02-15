import { SvelteComponent } from 'svelte';

export interface ToolbarNavigationTopProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ToolbarNavigationTop extends SvelteComponent<ToolbarNavigationTopProps> {}
