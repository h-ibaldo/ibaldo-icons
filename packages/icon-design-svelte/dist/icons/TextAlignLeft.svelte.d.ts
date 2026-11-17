import { SvelteComponent } from 'svelte';

export interface TextAlignLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextAlignLeft extends SvelteComponent<TextAlignLeftProps> {}
