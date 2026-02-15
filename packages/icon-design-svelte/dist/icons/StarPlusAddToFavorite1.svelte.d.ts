import { SvelteComponent } from 'svelte';

export interface StarPlusAddToFavorite1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StarPlusAddToFavorite1 extends SvelteComponent<StarPlusAddToFavorite1Props> {}
