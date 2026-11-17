import { SvelteComponent } from 'svelte';

export interface AtSign1MinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtSign1Minus extends SvelteComponent<AtSign1MinusProps> {}
