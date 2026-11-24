import { SvelteComponent } from 'svelte';

export interface TextLetterSpacingProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextLetterSpacing extends SvelteComponent<TextLetterSpacingProps> {}
