import { SvelteComponent } from 'svelte';

export interface SquareStackLinesDashedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareStackLinesDashed extends SvelteComponent<SquareStackLinesDashedProps> {}
