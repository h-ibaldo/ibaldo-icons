import { SvelteComponent } from 'svelte';

export interface AtDotsCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtDotsCircle extends SvelteComponent<AtDotsCircleProps> {}
