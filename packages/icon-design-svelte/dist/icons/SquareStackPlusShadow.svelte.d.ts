import { SvelteComponent } from 'svelte';

export interface SquareStackPlusShadowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareStackPlusShadow extends SvelteComponent<SquareStackPlusShadowProps> {}
