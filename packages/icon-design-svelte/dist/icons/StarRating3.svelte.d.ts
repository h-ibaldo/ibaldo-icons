import { SvelteComponent } from 'svelte';

export interface StarRating3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StarRating3 extends SvelteComponent<StarRating3Props> {}
