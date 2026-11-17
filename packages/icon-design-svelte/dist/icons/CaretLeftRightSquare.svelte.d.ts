import { SvelteComponent } from 'svelte';

export interface CaretLeftRightSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CaretLeftRightSquare extends SvelteComponent<CaretLeftRightSquareProps> {}
