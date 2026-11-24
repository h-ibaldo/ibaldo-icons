import { SvelteComponent } from 'svelte';

export interface TvLegsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TvLegs extends SvelteComponent<TvLegsProps> {}
