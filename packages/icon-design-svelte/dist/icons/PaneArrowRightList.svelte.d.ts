import { SvelteComponent } from 'svelte';

export interface PaneArrowRightListProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaneArrowRightList extends SvelteComponent<PaneArrowRightListProps> {}
