import { SvelteComponent } from 'svelte';

export interface TextYCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextYCircle extends SvelteComponent<TextYCircleProps> {}
