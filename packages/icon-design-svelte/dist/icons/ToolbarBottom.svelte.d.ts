import { SvelteComponent } from 'svelte';

export interface ToolbarBottomProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ToolbarBottom extends SvelteComponent<ToolbarBottomProps> {}
