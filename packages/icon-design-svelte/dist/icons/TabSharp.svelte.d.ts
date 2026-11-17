import { SvelteComponent } from 'svelte';

export interface TabSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabSharp extends SvelteComponent<TabSharpProps> {}
