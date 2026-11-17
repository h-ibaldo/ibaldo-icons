import { SvelteComponent } from 'svelte';

export interface TabMinusSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabMinusSharp extends SvelteComponent<TabMinusSharpProps> {}
