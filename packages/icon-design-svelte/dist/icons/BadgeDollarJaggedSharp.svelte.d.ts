import { SvelteComponent } from 'svelte';

export interface BadgeDollarJaggedSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BadgeDollarJaggedSharp extends SvelteComponent<BadgeDollarJaggedSharpProps> {}
