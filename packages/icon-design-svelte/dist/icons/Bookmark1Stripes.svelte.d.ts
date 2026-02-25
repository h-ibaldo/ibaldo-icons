import { SvelteComponent } from 'svelte';

export interface Bookmark1StripesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark1Stripes extends SvelteComponent<Bookmark1StripesProps> {}
