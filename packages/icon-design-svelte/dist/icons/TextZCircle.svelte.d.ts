import { SvelteComponent } from 'svelte';

export interface TextZCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextZCircle extends SvelteComponent<TextZCircleProps> {}
