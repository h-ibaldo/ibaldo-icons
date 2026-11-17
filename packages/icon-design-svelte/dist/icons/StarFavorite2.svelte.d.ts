import { SvelteComponent } from 'svelte';

export interface StarFavorite2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StarFavorite2 extends SvelteComponent<StarFavorite2Props> {}
