import { SvelteComponent } from 'svelte';

export interface TabPlusSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabPlusSharp extends SvelteComponent<TabPlusSharpProps> {}
