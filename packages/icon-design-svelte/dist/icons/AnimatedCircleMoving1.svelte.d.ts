import { SvelteComponent } from 'svelte';

export interface AnimatedCircleMoving1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AnimatedCircleMoving1 extends SvelteComponent<AnimatedCircleMoving1Props> {}
