import { SvelteComponent } from 'svelte';

export interface TabAddPlusCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabAddPlusCircle extends SvelteComponent<TabAddPlusCircleProps> {}
