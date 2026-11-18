import { SvelteComponent } from 'svelte';

export interface TextAlignRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextAlignRight extends SvelteComponent<TextAlignRightProps> {}
