import { SvelteComponent } from 'svelte';

export interface TextAppCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextAppCircle extends SvelteComponent<TextAppCircleProps> {}
