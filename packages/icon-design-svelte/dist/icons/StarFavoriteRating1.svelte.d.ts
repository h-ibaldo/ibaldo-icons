import { SvelteComponent } from 'svelte';

export interface StarFavoriteRating1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StarFavoriteRating1 extends SvelteComponent<StarFavoriteRating1Props> {}
