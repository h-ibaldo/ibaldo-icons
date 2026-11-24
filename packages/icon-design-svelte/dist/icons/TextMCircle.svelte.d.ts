import { SvelteComponent } from 'svelte';

export interface TextMCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextMCircle extends SvelteComponent<TextMCircleProps> {}
