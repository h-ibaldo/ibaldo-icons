import { SvelteComponent } from 'svelte';

export interface TextBCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextBCircle extends SvelteComponent<TextBCircleProps> {}
