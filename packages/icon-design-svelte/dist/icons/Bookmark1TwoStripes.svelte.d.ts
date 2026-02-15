import { SvelteComponent } from 'svelte';

export interface Bookmark1TwoStripesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark1TwoStripes extends SvelteComponent<Bookmark1TwoStripesProps> {}
