import { SvelteComponent } from 'svelte';

export interface TextSProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextS extends SvelteComponent<TextSProps> {}
