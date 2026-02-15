import { SvelteComponent } from 'svelte';

export interface ToolbarShowBottomPannelProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ToolbarShowBottomPannel extends SvelteComponent<ToolbarShowBottomPannelProps> {}
