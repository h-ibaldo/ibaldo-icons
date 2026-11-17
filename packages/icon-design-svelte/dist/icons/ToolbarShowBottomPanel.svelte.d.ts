import { SvelteComponent } from 'svelte';

export interface ToolbarShowBottomPanelProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ToolbarShowBottomPanel extends SvelteComponent<ToolbarShowBottomPanelProps> {}
