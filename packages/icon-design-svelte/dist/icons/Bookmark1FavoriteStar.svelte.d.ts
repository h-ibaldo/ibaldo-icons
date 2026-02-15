import { SvelteComponent } from 'svelte';

export interface Bookmark1FavoriteStarProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark1FavoriteStar extends SvelteComponent<Bookmark1FavoriteStarProps> {}
