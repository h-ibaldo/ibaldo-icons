import { SvelteComponent } from 'svelte';

export interface ToolbarNavigationPane1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ToolbarNavigationPane1 extends SvelteComponent<ToolbarNavigationPane1Props> {}
