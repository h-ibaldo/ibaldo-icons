import { SvelteComponent } from 'svelte';

export interface StarFavorite1StripedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StarFavorite1Striped extends SvelteComponent<StarFavorite1StripedProps> {}
