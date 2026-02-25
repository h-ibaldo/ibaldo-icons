import { SvelteComponent } from 'svelte';

export interface ToolbarStartProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ToolbarStart extends SvelteComponent<ToolbarStartProps> {}
