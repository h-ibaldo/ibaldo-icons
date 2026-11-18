import { SvelteComponent } from 'svelte';

export interface TrophyPointedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrophyPointed extends SvelteComponent<TrophyPointedProps> {}
