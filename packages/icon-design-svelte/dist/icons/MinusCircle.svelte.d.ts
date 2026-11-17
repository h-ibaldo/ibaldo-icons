import { SvelteComponent } from 'svelte';

export interface MinusCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MinusCircle extends SvelteComponent<MinusCircleProps> {}
