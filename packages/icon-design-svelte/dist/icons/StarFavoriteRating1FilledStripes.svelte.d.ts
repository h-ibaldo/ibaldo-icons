import { SvelteComponent } from 'svelte';

export interface StarFavoriteRating1FilledStripesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StarFavoriteRating1FilledStripes extends SvelteComponent<StarFavoriteRating1FilledStripesProps> {}
