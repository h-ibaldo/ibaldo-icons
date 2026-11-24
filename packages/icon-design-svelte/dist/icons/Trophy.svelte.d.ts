import { SvelteComponent } from 'svelte';

export interface TrophyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Trophy extends SvelteComponent<TrophyProps> {}
