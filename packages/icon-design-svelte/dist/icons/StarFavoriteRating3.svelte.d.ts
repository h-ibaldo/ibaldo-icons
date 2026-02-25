import { SvelteComponent } from 'svelte';

export interface StarFavoriteRating3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StarFavoriteRating3 extends SvelteComponent<StarFavoriteRating3Props> {}
