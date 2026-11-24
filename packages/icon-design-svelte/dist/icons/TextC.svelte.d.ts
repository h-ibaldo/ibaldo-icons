import { SvelteComponent } from 'svelte';

export interface TextCProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextC extends SvelteComponent<TextCProps> {}
