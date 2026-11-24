import { SvelteComponent } from 'svelte';

export interface RecordSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class RecordSquare extends SvelteComponent<RecordSquareProps> {}
