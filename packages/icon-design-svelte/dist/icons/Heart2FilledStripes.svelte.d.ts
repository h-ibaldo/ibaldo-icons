import { SvelteComponent } from 'svelte';

export interface Heart2FilledStripesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Heart2FilledStripes extends SvelteComponent<Heart2FilledStripesProps> {}
