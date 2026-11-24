import { SvelteComponent } from 'svelte';

export interface ChevronUpDownCircleSmallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChevronUpDownCircleSmall extends SvelteComponent<ChevronUpDownCircleSmallProps> {}
