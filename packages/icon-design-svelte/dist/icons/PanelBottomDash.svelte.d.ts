import { SvelteComponent } from 'svelte';

export interface PanelBottomDashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PanelBottomDash extends SvelteComponent<PanelBottomDashProps> {}
