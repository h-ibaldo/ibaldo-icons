import { SvelteComponent } from 'svelte';

export interface TextPCircleOffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextPCircleOff extends SvelteComponent<TextPCircleOffProps> {}
