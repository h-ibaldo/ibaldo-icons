import { SvelteComponent } from 'svelte';

export interface MoveHandProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MoveHand extends SvelteComponent<MoveHandProps> {}
