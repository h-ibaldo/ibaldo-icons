import { SvelteComponent } from 'svelte';

export interface CheckSquareStackShadowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckSquareStackShadow extends SvelteComponent<CheckSquareStackShadowProps> {}
