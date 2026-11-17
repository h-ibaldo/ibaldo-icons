import { SvelteComponent } from 'svelte';

export interface TextAlignLeftLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextAlignLeftLarge extends SvelteComponent<TextAlignLeftLargeProps> {}
