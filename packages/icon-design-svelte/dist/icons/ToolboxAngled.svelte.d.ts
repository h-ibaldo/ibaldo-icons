import { SvelteComponent } from 'svelte';

export interface ToolboxAngledProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ToolboxAngled extends SvelteComponent<ToolboxAngledProps> {}
