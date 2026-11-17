import { SvelteComponent } from 'svelte';

export interface ToolHandSupport2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ToolHandSupport2 extends SvelteComponent<ToolHandSupport2Props> {}
