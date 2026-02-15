import { SvelteComponent } from 'svelte';

export interface ToolbarNavigationPane2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ToolbarNavigationPane2 extends SvelteComponent<ToolbarNavigationPane2Props> {}
