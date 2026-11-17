import { SvelteComponent } from 'svelte';

export interface BowlingBallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BowlingBall extends SvelteComponent<BowlingBallProps> {}
