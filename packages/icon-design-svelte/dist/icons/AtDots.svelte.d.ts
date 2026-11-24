import { SvelteComponent } from 'svelte';

export interface AtDotsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtDots extends SvelteComponent<AtDotsProps> {}
