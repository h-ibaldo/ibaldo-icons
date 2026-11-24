import { SvelteComponent } from 'svelte';

export interface SquareStackLockDashedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareStackLockDashed extends SvelteComponent<SquareStackLockDashedProps> {}
