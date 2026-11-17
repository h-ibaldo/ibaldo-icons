import { SvelteComponent } from 'svelte';

export interface BellSquareOffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellSquareOff extends SvelteComponent<BellSquareOffProps> {}
