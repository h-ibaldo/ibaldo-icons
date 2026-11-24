import { SvelteComponent } from 'svelte';

export interface TextHollowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextHollow extends SvelteComponent<TextHollowProps> {}
