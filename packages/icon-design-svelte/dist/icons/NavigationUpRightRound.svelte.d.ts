import { SvelteComponent } from 'svelte';

export interface NavigationUpRightRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NavigationUpRightRound extends SvelteComponent<NavigationUpRightRoundProps> {}
