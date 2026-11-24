import { SvelteComponent } from 'svelte';

export interface PanelLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PanelLeft extends SvelteComponent<PanelLeftProps> {}
