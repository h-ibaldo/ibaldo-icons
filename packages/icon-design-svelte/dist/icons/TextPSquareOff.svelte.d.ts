import { SvelteComponent } from 'svelte';

export interface TextPSquareOffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextPSquareOff extends SvelteComponent<TextPSquareOffProps> {}
