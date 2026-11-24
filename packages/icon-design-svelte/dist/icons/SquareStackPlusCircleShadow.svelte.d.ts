import { SvelteComponent } from 'svelte';

export interface SquareStackPlusCircleShadowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareStackPlusCircleShadow extends SvelteComponent<SquareStackPlusCircleShadowProps> {}
