import { SvelteComponent } from 'svelte';

export interface TextLigatureProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextLigature extends SvelteComponent<TextLigatureProps> {}
