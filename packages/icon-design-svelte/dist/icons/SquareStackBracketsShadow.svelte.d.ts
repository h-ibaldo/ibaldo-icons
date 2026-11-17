import { SvelteComponent } from 'svelte';

export interface SquareStackBracketsShadowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareStackBracketsShadow extends SvelteComponent<SquareStackBracketsShadowProps> {}
