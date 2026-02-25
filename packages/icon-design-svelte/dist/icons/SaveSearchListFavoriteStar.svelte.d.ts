import { SvelteComponent } from 'svelte';

export interface SaveSearchListFavoriteStarProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SaveSearchListFavoriteStar extends SvelteComponent<SaveSearchListFavoriteStarProps> {}
