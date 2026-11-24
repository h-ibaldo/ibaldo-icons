import { SvelteComponent } from 'svelte';

export interface TextDProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextD extends SvelteComponent<TextDProps> {}
