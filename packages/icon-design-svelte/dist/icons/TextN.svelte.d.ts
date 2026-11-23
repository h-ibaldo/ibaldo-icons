import { SvelteComponent } from 'svelte';

export interface TextNProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextN extends SvelteComponent<TextNProps> {}
