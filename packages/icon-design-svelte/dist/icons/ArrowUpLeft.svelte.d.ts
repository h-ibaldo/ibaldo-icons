import { SvelteComponent } from 'svelte';

export interface ArrowUpLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowUpLeft extends SvelteComponent<ArrowUpLeftProps> {}
