import { SvelteComponent } from 'svelte';

export interface DotsVerticalSmallSpacedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DotsVerticalSmallSpaced extends SvelteComponent<DotsVerticalSmallSpacedProps> {}
