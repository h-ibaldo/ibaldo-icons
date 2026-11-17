import { SvelteComponent } from 'svelte';

export interface StarPlusCenterProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StarPlusCenter extends SvelteComponent<StarPlusCenterProps> {}
