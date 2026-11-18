import { SvelteComponent } from 'svelte';

export interface DivideCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DivideCircle extends SvelteComponent<DivideCircleProps> {}
