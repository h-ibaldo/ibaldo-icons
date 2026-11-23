import { SvelteComponent } from 'svelte';

export interface TextMProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextM extends SvelteComponent<TextMProps> {}
