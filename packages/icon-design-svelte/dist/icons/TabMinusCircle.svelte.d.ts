import { SvelteComponent } from 'svelte';

export interface TabMinusCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabMinusCircle extends SvelteComponent<TabMinusCircleProps> {}
