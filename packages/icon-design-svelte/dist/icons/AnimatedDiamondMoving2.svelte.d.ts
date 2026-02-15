import { SvelteComponent } from 'svelte';

export interface AnimatedDiamondMoving2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AnimatedDiamondMoving2 extends SvelteComponent<AnimatedDiamondMoving2Props> {}
