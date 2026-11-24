import { SvelteComponent } from 'svelte';

export interface TabPlusCircleSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabPlusCircleSharp extends SvelteComponent<TabPlusCircleSharpProps> {}
