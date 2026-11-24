import { SvelteComponent } from 'svelte';

export interface TextACircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextACircle extends SvelteComponent<TextACircleProps> {}
