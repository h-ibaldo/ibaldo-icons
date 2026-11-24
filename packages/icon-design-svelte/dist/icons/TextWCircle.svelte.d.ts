import { SvelteComponent } from 'svelte';

export interface TextWCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextWCircle extends SvelteComponent<TextWCircleProps> {}
