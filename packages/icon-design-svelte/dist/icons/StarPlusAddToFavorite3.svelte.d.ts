import { SvelteComponent } from 'svelte';

export interface StarPlusAddToFavorite3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StarPlusAddToFavorite3 extends SvelteComponent<StarPlusAddToFavorite3Props> {}
