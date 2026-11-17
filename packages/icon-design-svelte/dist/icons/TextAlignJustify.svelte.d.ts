import { SvelteComponent } from 'svelte';

export interface TextAlignJustifyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextAlignJustify extends SvelteComponent<TextAlignJustifyProps> {}
