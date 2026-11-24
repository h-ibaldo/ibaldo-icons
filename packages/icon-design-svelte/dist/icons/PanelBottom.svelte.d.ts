import { SvelteComponent } from 'svelte';

export interface PanelBottomProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PanelBottom extends SvelteComponent<PanelBottomProps> {}
