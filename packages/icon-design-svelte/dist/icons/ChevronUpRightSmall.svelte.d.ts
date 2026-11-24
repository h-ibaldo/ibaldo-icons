import { SvelteComponent } from 'svelte';

export interface ChevronUpRightSmallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChevronUpRightSmall extends SvelteComponent<ChevronUpRightSmallProps> {}
