import { SvelteComponent } from 'svelte';

export interface TextPProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextP extends SvelteComponent<TextPProps> {}
