import { SvelteComponent } from 'svelte';

export interface TextICircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextICircle extends SvelteComponent<TextICircleProps> {}
