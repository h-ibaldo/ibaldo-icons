import { SvelteComponent } from 'svelte';

export interface TextAaSquareBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextAaSquareBoxy extends SvelteComponent<TextAaSquareBoxyProps> {}
