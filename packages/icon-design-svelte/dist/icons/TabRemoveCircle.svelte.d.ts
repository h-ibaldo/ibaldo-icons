import { SvelteComponent } from 'svelte';

export interface TabRemoveCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabRemoveCircle extends SvelteComponent<TabRemoveCircleProps> {}
