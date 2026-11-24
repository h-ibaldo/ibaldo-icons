import { SvelteComponent } from 'svelte';

export interface TextFCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextFCircle extends SvelteComponent<TextFCircleProps> {}
