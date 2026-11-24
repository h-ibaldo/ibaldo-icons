import { SvelteComponent } from 'svelte';

export interface TextUCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextUCircle extends SvelteComponent<TextUCircleProps> {}
