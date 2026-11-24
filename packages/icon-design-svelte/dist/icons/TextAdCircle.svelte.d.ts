import { SvelteComponent } from 'svelte';

export interface TextAdCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextAdCircle extends SvelteComponent<TextAdCircleProps> {}
