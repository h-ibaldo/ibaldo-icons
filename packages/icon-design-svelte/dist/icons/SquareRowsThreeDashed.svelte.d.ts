import { SvelteComponent } from 'svelte';

export interface SquareRowsThreeDashedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareRowsThreeDashed extends SvelteComponent<SquareRowsThreeDashedProps> {}
