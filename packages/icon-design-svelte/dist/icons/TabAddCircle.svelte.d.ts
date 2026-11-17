import { SvelteComponent } from 'svelte';

export interface TabAddCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabAddCircle extends SvelteComponent<TabAddCircleProps> {}
