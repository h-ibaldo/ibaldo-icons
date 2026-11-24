import { SvelteComponent } from 'svelte';

export interface TextTProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextT extends SvelteComponent<TextTProps> {}
