import { SvelteComponent } from 'svelte';

export interface ToolSupport7Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ToolSupport7 extends SvelteComponent<ToolSupport7Props> {}
