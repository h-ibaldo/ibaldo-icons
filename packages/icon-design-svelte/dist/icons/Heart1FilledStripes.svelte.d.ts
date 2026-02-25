import { SvelteComponent } from 'svelte';

export interface Heart1FilledStripesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Heart1FilledStripes extends SvelteComponent<Heart1FilledStripesProps> {}
