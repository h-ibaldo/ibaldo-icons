import { SvelteComponent } from 'svelte';

export interface DotsCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DotsCircle extends SvelteComponent<DotsCircleProps> {}
