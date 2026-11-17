import { SvelteComponent } from 'svelte';

export interface AtMinusCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtMinusCircle extends SvelteComponent<AtMinusCircleProps> {}
