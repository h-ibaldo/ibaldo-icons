import { SvelteComponent } from 'svelte';

export interface ToolSupport5Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ToolSupport5 extends SvelteComponent<ToolSupport5Props> {}
