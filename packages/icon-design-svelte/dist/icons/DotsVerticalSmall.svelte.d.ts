import { SvelteComponent } from 'svelte';

export interface DotsVerticalSmallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DotsVerticalSmall extends SvelteComponent<DotsVerticalSmallProps> {}
