import { SvelteComponent } from 'svelte';

export interface TabAddPlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabAddPlus extends SvelteComponent<TabAddPlusProps> {}
