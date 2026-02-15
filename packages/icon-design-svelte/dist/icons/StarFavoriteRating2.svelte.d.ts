import { SvelteComponent } from 'svelte';

export interface StarFavoriteRating2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StarFavoriteRating2 extends SvelteComponent<StarFavoriteRating2Props> {}
