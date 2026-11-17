import { SvelteComponent } from 'svelte';

export interface ToolbarShowTopPanelProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ToolbarShowTopPanel extends SvelteComponent<ToolbarShowTopPanelProps> {}
