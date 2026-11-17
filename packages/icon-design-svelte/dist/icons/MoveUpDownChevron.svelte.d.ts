import { SvelteComponent } from 'svelte';

export interface MoveUpDownChevronProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MoveUpDownChevron extends SvelteComponent<MoveUpDownChevronProps> {}
