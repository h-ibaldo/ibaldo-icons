import { SvelteComponent } from 'svelte';

export interface ToolSupport2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ToolSupport2 extends SvelteComponent<ToolSupport2Props> {}
