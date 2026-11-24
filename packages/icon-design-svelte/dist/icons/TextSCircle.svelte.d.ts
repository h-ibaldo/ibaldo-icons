import { SvelteComponent } from 'svelte';

export interface TextSCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextSCircle extends SvelteComponent<TextSCircleProps> {}
