import { SvelteComponent } from 'svelte';

export interface NotApproximateSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NotApproximateSquare extends SvelteComponent<NotApproximateSquareProps> {}
