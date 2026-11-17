import { SvelteComponent } from 'svelte';

export interface PaneArrowRightStripedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaneArrowRightStriped extends SvelteComponent<PaneArrowRightStripedProps> {}
