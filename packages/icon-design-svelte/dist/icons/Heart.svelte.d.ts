import { SvelteComponent } from 'svelte';

export interface HeartProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Heart extends SvelteComponent<HeartProps> {}
