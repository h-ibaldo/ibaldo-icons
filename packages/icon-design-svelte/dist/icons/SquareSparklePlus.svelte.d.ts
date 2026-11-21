import { SvelteComponent } from 'svelte';

export interface SquareSparklePlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareSparklePlus extends SvelteComponent<SquareSparklePlusProps> {}
