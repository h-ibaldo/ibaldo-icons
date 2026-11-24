import { SvelteComponent } from 'svelte';

export interface ChevronDoubleDownRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChevronDoubleDownRight extends SvelteComponent<ChevronDoubleDownRightProps> {}
