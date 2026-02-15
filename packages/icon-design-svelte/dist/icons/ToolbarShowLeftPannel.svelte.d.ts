import { SvelteComponent } from 'svelte';

export interface ToolbarShowLeftPannelProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ToolbarShowLeftPannel extends SvelteComponent<ToolbarShowLeftPannelProps> {}
