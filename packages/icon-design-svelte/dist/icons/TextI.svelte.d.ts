import { SvelteComponent } from 'svelte';

export interface TextIProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextI extends SvelteComponent<TextIProps> {}
