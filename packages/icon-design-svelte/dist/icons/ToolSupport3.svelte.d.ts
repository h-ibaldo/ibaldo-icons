import { SvelteComponent } from 'svelte';

export interface ToolSupport3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ToolSupport3 extends SvelteComponent<ToolSupport3Props> {}
