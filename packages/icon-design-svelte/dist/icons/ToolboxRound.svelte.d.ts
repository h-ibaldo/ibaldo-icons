import { SvelteComponent } from 'svelte';

export interface ToolboxRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ToolboxRound extends SvelteComponent<ToolboxRoundProps> {}
