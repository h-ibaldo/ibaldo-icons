import { SvelteComponent } from 'svelte';

export interface TextAlignJustifyLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextAlignJustifyLarge extends SvelteComponent<TextAlignJustifyLargeProps> {}
