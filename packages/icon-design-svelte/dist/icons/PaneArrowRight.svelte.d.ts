import { SvelteComponent } from 'svelte';

export interface PaneArrowRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaneArrowRight extends SvelteComponent<PaneArrowRightProps> {}
