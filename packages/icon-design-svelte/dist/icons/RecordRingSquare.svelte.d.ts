import { SvelteComponent } from 'svelte';

export interface RecordRingSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class RecordRingSquare extends SvelteComponent<RecordRingSquareProps> {}
