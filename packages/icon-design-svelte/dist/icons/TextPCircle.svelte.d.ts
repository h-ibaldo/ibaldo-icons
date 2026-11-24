import { SvelteComponent } from 'svelte';

export interface TextPCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextPCircle extends SvelteComponent<TextPCircleProps> {}
