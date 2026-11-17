import { SvelteComponent } from 'svelte';

export interface BackspaceProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Backspace extends SvelteComponent<BackspaceProps> {}
