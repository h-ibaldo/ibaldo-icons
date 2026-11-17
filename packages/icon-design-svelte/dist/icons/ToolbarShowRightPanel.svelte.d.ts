import { SvelteComponent } from 'svelte';

export interface ToolbarShowRightPanelProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ToolbarShowRightPanel extends SvelteComponent<ToolbarShowRightPanelProps> {}
