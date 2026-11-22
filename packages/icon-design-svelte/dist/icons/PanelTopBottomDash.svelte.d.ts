import { SvelteComponent } from 'svelte';

export interface PanelTopBottomDashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PanelTopBottomDash extends SvelteComponent<PanelTopBottomDashProps> {}
