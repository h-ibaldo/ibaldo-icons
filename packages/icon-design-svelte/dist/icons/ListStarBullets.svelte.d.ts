import { SvelteComponent } from 'svelte';

export interface ListStarBulletsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ListStarBullets extends SvelteComponent<ListStarBulletsProps> {}
