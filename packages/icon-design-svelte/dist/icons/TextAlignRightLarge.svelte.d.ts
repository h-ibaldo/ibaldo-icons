import { SvelteComponent } from 'svelte';

export interface TextAlignRightLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextAlignRightLarge extends SvelteComponent<TextAlignRightLargeProps> {}
