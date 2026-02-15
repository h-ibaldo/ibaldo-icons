import { SvelteComponent } from 'svelte';

export interface ToolbarNavigationLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ToolbarNavigationLeft extends SvelteComponent<ToolbarNavigationLeftProps> {}
