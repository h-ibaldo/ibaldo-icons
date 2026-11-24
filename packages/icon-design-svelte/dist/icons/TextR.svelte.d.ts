import { SvelteComponent } from 'svelte';

export interface TextRProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextR extends SvelteComponent<TextRProps> {}
