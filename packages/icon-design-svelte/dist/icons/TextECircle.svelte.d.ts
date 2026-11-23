import { SvelteComponent } from 'svelte';

export interface TextECircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextECircle extends SvelteComponent<TextECircleProps> {}
