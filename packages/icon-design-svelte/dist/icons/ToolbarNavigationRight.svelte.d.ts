import { SvelteComponent } from 'svelte';

export interface ToolbarNavigationRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ToolbarNavigationRight extends SvelteComponent<ToolbarNavigationRightProps> {}
