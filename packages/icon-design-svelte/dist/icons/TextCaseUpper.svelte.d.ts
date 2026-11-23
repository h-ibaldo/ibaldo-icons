import { SvelteComponent } from 'svelte';

export interface TextCaseUpperProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextCaseUpper extends SvelteComponent<TextCaseUpperProps> {}
