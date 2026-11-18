import { SvelteComponent } from 'svelte';

export interface NavigationUpCircleDashedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NavigationUpCircleDashed extends SvelteComponent<NavigationUpCircleDashedProps> {}
