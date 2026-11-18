import { SvelteComponent } from 'svelte';

export interface TextAaSquareLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextAaSquareLarge extends SvelteComponent<TextAaSquareLargeProps> {}
