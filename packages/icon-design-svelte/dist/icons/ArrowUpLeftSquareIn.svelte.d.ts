import { SvelteComponent } from 'svelte';

export interface ArrowUpLeftSquareInProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowUpLeftSquareIn extends SvelteComponent<ArrowUpLeftSquareInProps> {}
