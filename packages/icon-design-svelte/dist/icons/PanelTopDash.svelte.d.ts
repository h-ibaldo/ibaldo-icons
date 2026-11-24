import { SvelteComponent } from 'svelte';

export interface PanelTopDashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PanelTopDash extends SvelteComponent<PanelTopDashProps> {}
