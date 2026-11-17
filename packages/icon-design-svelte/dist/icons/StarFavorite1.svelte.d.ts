import { SvelteComponent } from 'svelte';

export interface StarFavorite1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StarFavorite1 extends SvelteComponent<StarFavorite1Props> {}
