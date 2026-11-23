import { SvelteComponent } from 'svelte';

export interface TextVCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextVCircle extends SvelteComponent<TextVCircleProps> {}
