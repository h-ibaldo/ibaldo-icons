import { SvelteComponent } from 'svelte';

export interface NavigationUpLeftRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NavigationUpLeftRound extends SvelteComponent<NavigationUpLeftRoundProps> {}
