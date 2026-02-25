import { SvelteComponent } from 'svelte';

export interface ToolSupport1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ToolSupport1 extends SvelteComponent<ToolSupport1Props> {}
