import { SvelteComponent } from 'svelte';

export interface StarFavorite2StripedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StarFavorite2Striped extends SvelteComponent<StarFavorite2StripedProps> {}
