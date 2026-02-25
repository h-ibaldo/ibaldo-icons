import { SvelteComponent } from 'svelte';

export interface AnimatedDiamondMoving1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AnimatedDiamondMoving1 extends SvelteComponent<AnimatedDiamondMoving1Props> {}
