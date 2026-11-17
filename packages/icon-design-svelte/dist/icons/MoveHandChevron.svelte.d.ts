import { SvelteComponent } from 'svelte';

export interface MoveHandChevronProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MoveHandChevron extends SvelteComponent<MoveHandChevronProps> {}
