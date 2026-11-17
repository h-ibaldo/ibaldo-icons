import { SvelteComponent } from 'svelte';

export interface TabCheckSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabCheckSharp extends SvelteComponent<TabCheckSharpProps> {}
