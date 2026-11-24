import { SvelteComponent } from 'svelte';

export interface LayoutPanelLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LayoutPanelLeft extends SvelteComponent<LayoutPanelLeftProps> {}
