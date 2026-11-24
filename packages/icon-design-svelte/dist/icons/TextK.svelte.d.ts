import { SvelteComponent } from 'svelte';

export interface TextKProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextK extends SvelteComponent<TextKProps> {}
