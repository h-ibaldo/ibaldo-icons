import { SvelteComponent } from 'svelte';

export interface KeyBlockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class KeyBlock extends SvelteComponent<KeyBlockProps> {}
