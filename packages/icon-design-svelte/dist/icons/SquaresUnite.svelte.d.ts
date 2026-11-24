import { SvelteComponent } from 'svelte';

export interface SquaresUniteProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquaresUnite extends SvelteComponent<SquaresUniteProps> {}
