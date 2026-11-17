import { SvelteComponent } from 'svelte';

export interface SquareStackImageDashedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareStackImageDashed extends SvelteComponent<SquareStackImageDashedProps> {}
