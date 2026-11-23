import { SvelteComponent } from 'svelte';

export interface TextWProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextW extends SvelteComponent<TextWProps> {}
