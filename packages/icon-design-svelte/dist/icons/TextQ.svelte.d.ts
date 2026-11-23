import { SvelteComponent } from 'svelte';

export interface TextQProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextQ extends SvelteComponent<TextQProps> {}
