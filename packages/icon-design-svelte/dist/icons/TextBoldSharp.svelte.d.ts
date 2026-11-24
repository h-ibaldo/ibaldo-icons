import { SvelteComponent } from 'svelte';

export interface TextBoldSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextBoldSharp extends SvelteComponent<TextBoldSharpProps> {}
