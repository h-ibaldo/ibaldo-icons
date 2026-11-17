import { SvelteComponent } from 'svelte';

export interface FormRowsSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FormRowsSquare extends SvelteComponent<FormRowsSquareProps> {}
