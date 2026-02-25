import { SvelteComponent } from 'svelte';

export interface StarFavoriteRating2FilledStripesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StarFavoriteRating2FilledStripes extends SvelteComponent<StarFavoriteRating2FilledStripesProps> {}
