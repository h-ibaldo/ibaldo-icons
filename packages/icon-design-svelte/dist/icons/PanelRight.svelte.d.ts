import { SvelteComponent } from 'svelte';

export interface PanelRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PanelRight extends SvelteComponent<PanelRightProps> {}
