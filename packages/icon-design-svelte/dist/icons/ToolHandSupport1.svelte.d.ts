import { SvelteComponent } from 'svelte';

export interface ToolHandSupport1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ToolHandSupport1 extends SvelteComponent<ToolHandSupport1Props> {}
