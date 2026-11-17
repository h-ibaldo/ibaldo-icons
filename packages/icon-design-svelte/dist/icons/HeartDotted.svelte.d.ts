import { SvelteComponent } from 'svelte';

export interface HeartDottedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HeartDotted extends SvelteComponent<HeartDottedProps> {}
