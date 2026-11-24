import { SvelteComponent } from 'svelte';

export interface LayoutPanelTopProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LayoutPanelTop extends SvelteComponent<LayoutPanelTopProps> {}
