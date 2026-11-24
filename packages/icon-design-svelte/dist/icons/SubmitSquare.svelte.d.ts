import { SvelteComponent } from 'svelte';

export interface SubmitSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SubmitSquare extends SvelteComponent<SubmitSquareProps> {}
