import { SvelteComponent } from 'svelte';

export interface BadgeDollarBareJaggedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BadgeDollarBareJagged extends SvelteComponent<BadgeDollarBareJaggedProps> {}
