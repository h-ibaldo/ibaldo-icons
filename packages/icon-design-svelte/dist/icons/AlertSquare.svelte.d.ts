import { SvelteComponent } from 'svelte';

export interface AlertSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlertSquare extends SvelteComponent<AlertSquareProps> {}
