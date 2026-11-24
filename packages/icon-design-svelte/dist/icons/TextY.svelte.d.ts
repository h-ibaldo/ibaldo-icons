import { SvelteComponent } from 'svelte';

export interface TextYProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextY extends SvelteComponent<TextYProps> {}
