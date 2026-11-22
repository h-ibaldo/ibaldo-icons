import { SvelteComponent } from 'svelte';

export interface PanelRightDashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PanelRightDash extends SvelteComponent<PanelRightDashProps> {}
