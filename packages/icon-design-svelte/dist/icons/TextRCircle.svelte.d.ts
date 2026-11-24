import { SvelteComponent } from 'svelte';

export interface TextRCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextRCircle extends SvelteComponent<TextRCircleProps> {}
