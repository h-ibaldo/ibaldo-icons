import { SvelteComponent } from 'svelte';

export interface ChevronDownRightSmallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChevronDownRightSmall extends SvelteComponent<ChevronDownRightSmallProps> {}
