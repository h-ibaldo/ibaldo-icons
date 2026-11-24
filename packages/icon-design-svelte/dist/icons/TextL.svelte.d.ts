import { SvelteComponent } from 'svelte';

export interface TextLProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextL extends SvelteComponent<TextLProps> {}
