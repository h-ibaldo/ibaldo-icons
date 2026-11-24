import { SvelteComponent } from 'svelte';

export interface SelfieSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SelfieSquare extends SvelteComponent<SelfieSquareProps> {}
