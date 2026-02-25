import { SvelteComponent } from 'svelte';

export interface Bookmark1CircleCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark1CircleCheck extends SvelteComponent<Bookmark1CircleCheckProps> {}
