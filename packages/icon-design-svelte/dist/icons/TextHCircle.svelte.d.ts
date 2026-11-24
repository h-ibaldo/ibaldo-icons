import { SvelteComponent } from 'svelte';

export interface TextHCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextHCircle extends SvelteComponent<TextHCircleProps> {}
