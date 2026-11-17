import { SvelteComponent } from 'svelte';

export interface PanelTopProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PanelTop extends SvelteComponent<PanelTopProps> {}
