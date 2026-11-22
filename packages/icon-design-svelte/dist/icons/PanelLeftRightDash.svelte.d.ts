import { SvelteComponent } from 'svelte';

export interface PanelLeftRightDashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PanelLeftRightDash extends SvelteComponent<PanelLeftRightDashProps> {}
