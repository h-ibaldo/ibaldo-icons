import { SvelteComponent } from 'svelte';

export interface ScrollMedalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScrollMedal extends SvelteComponent<ScrollMedalProps> {}
