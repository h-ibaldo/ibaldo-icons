import { SvelteComponent } from 'svelte';

export interface TextUProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextU extends SvelteComponent<TextUProps> {}
