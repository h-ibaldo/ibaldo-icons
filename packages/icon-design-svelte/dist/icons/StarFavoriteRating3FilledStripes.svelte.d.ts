import { SvelteComponent } from 'svelte';

export interface StarFavoriteRating3FilledStripesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StarFavoriteRating3FilledStripes extends SvelteComponent<StarFavoriteRating3FilledStripesProps> {}
