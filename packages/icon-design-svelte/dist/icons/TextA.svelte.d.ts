import { SvelteComponent } from 'svelte';

export interface TextAProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextA extends SvelteComponent<TextAProps> {}
