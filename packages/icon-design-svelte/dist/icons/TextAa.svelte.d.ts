import { SvelteComponent } from 'svelte';

export interface TextAaProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextAa extends SvelteComponent<TextAaProps> {}
