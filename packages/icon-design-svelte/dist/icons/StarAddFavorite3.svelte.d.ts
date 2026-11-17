import { SvelteComponent } from 'svelte';

export interface StarAddFavorite3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StarAddFavorite3 extends SvelteComponent<StarAddFavorite3Props> {}
