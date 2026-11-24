import { SvelteComponent } from 'svelte';

export interface TextZProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextZ extends SvelteComponent<TextZProps> {}
