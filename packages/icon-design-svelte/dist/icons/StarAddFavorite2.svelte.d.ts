import { SvelteComponent } from 'svelte';

export interface StarAddFavorite2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StarAddFavorite2 extends SvelteComponent<StarAddFavorite2Props> {}
