import { SvelteComponent } from 'svelte';

export interface ToolbarShowRightPannelProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ToolbarShowRightPannel extends SvelteComponent<ToolbarShowRightPannelProps> {}
