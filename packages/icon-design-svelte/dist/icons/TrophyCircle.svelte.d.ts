import { SvelteComponent } from 'svelte';

export interface TrophyCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrophyCircle extends SvelteComponent<TrophyCircleProps> {}
