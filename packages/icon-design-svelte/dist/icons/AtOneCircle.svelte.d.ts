import { SvelteComponent } from 'svelte';

export interface AtOneCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtOneCircle extends SvelteComponent<AtOneCircleProps> {}
