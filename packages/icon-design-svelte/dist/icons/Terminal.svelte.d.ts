import { SvelteComponent } from 'svelte';

export interface TerminalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Terminal extends SvelteComponent<TerminalProps> {}
