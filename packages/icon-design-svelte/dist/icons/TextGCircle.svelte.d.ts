import { SvelteComponent } from 'svelte';

export interface TextGCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextGCircle extends SvelteComponent<TextGCircleProps> {}
