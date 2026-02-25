import { SvelteComponent } from 'svelte';

export interface ToolSupport4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ToolSupport4 extends SvelteComponent<ToolSupport4Props> {}
