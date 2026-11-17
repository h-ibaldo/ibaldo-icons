import { SvelteComponent } from 'svelte';

export interface RestoreSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class RestoreSquare extends SvelteComponent<RestoreSquareProps> {}
