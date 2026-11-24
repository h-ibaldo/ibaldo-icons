import { SvelteComponent } from 'svelte';

export interface TextBProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextB extends SvelteComponent<TextBProps> {}
