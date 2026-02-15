import { SvelteComponent } from 'svelte';

export interface ToolbarNavigationBottomProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ToolbarNavigationBottom extends SvelteComponent<ToolbarNavigationBottomProps> {}
