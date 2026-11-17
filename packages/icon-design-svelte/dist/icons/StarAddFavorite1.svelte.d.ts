import { SvelteComponent } from 'svelte';

export interface StarAddFavorite1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StarAddFavorite1 extends SvelteComponent<StarAddFavorite1Props> {}
