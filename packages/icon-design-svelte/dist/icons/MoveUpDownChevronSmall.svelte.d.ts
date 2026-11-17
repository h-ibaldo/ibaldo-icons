import { SvelteComponent } from 'svelte';

export interface MoveUpDownChevronSmallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MoveUpDownChevronSmall extends SvelteComponent<MoveUpDownChevronSmallProps> {}
