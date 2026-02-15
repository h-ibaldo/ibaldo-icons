import { SvelteComponent } from 'svelte';

export interface AnimatedCircleMoving2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AnimatedCircleMoving2 extends SvelteComponent<AnimatedCircleMoving2Props> {}
