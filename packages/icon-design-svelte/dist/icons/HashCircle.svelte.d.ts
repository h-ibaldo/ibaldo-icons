import { SvelteComponent } from 'svelte';

export interface HashCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HashCircle extends SvelteComponent<HashCircleProps> {}
