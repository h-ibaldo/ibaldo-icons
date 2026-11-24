import { SvelteComponent } from 'svelte';

export interface NavigationUpRightSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NavigationUpRightSharp extends SvelteComponent<NavigationUpRightSharpProps> {}
