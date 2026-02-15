import { SvelteComponent } from 'svelte';

export interface StarPlusAddToFavorite2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StarPlusAddToFavorite2 extends SvelteComponent<StarPlusAddToFavorite2Props> {}
