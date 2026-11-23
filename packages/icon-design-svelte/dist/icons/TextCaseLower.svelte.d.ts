import { SvelteComponent } from 'svelte';

export interface TextCaseLowerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextCaseLower extends SvelteComponent<TextCaseLowerProps> {}
