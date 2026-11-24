import { SvelteComponent } from 'svelte';

export interface TextOProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextO extends SvelteComponent<TextOProps> {}
