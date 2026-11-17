import { SvelteComponent } from 'svelte';

export interface TabAddPlus2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabAddPlus2 extends SvelteComponent<TabAddPlus2Props> {}
