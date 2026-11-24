import { SvelteComponent } from 'svelte';

export interface TextXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextX extends SvelteComponent<TextXProps> {}
