import { SvelteComponent } from 'svelte';

export interface TextEProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextE extends SvelteComponent<TextEProps> {}
