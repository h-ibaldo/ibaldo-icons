import { SvelteComponent } from 'svelte';

export interface TextJProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextJ extends SvelteComponent<TextJProps> {}
