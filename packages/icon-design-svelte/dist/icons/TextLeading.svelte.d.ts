import { SvelteComponent } from 'svelte';

export interface TextLeadingProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextLeading extends SvelteComponent<TextLeadingProps> {}
