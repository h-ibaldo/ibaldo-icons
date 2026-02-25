import { SvelteComponent } from 'svelte';

export interface SequenceRectanglesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SequenceRectangles extends SvelteComponent<SequenceRectanglesProps> {}
