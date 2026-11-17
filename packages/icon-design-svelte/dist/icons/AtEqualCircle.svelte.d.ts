import { SvelteComponent } from 'svelte';

export interface AtEqualCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtEqualCircle extends SvelteComponent<AtEqualCircleProps> {}
