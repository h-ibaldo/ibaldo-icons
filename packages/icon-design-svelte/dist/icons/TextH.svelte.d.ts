import { SvelteComponent } from 'svelte';

export interface TextHProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextH extends SvelteComponent<TextHProps> {}
