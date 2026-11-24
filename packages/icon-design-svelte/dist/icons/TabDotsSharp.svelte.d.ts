import { SvelteComponent } from 'svelte';

export interface TabDotsSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabDotsSharp extends SvelteComponent<TabDotsSharpProps> {}
