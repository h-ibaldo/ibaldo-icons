import { SvelteComponent } from 'svelte';

export interface ToolbarShowTopPannelProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ToolbarShowTopPannel extends SvelteComponent<ToolbarShowTopPannelProps> {}
