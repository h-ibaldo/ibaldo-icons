import { SvelteComponent } from 'svelte';

export interface TabXCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabXCircle extends SvelteComponent<TabXCircleProps> {}
