import { SvelteComponent } from 'svelte';

export interface CloudSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudSquare extends SvelteComponent<CloudSquareProps> {}
