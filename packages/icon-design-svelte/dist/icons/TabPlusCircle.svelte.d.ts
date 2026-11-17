import { SvelteComponent } from 'svelte';

export interface TabPlusCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabPlusCircle extends SvelteComponent<TabPlusCircleProps> {}
