import { SvelteComponent } from 'svelte';

export interface ToolbarTopProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ToolbarTop extends SvelteComponent<ToolbarTopProps> {}
